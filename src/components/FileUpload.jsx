import React, { useState, useRef } from 'react';
import { Upload, FileText, Image, File, X, AlertCircle, CheckCircle } from 'lucide-react';
import { validateFile } from '../utils/validators';

const FileUpload = ({ 
  onFileSelect, 
  onFileRemove, 
  maxSize = 10 * 1024 * 1024, // 10MB
  allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'],
  allowedExtensions = ['.jpg', '.jpeg', '.png', '.pdf'],
  multiple = false,
  required = false,
  label = 'Sélectionner un fichier',
  placeholder = 'Glissez-déposez votre fichier ici ou cliquez pour sélectionner',
  error = null
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const errors = {};
    const validFiles = [];

    files.forEach((file, index) => {
      const validation = validateFile(file, {
        maxSize,
        allowedTypes,
        allowedExtensions
      });

      if (validation.isValid) {
        validFiles.push(file);
      } else {
        errors[file.name] = validation.error;
      }
    });

    setValidationErrors(errors);

    if (validFiles.length > 0) {
      const newFiles = multiple ? [...uploadedFiles, ...validFiles] : validFiles;
      setUploadedFiles(newFiles);
      
      if (onFileSelect) {
        onFileSelect(multiple ? newFiles : newFiles[0]);
      }
    }
  };

  const removeFile = (fileName) => {
    const newFiles = uploadedFiles.filter(file => file.name !== fileName);
    setUploadedFiles(newFiles);
    
    if (onFileRemove) {
      onFileRemove(fileName);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileType) => {
    if (fileType.startsWith('image/')) {
      return <Image className="w-5 h-5" />;
    } else if (fileType === 'application/pdf') {
      return <FileText className="w-5 h-5" />;
    } else {
      return <File className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Zone de drop */}
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          isDragOver
            ? 'border-primary-500 bg-primary-50'
            : error
            ? 'border-red-300 bg-red-50'
            : 'border-neutral-300 bg-neutral-50 hover:border-neutral-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <div className="space-y-3">
          <div className="mx-auto w-12 h-12 bg-neutral-200 rounded-lg flex items-center justify-center">
            <Upload className="w-6 h-6 text-neutral-500" />
          </div>
          
          <div>
            <p className="text-sm font-medium text-neutral-900 mb-1">
              {label}
            </p>
            <p className="text-sm text-neutral-600">
              {placeholder}
            </p>
          </div>
          
          <div className="text-xs text-neutral-500">
            <p>Types acceptés : {allowedExtensions.join(', ')}</p>
            <p>Taille maximale : {formatFileSize(maxSize)}</p>
          </div>
        </div>
      </div>

      {/* Input file caché */}
      <input
        ref={fileInputRef}
        type="file"
        multiple={multiple}
        accept={allowedTypes.join(',')}
        onChange={handleFileInput}
        className="hidden"
      />

      {/* Fichiers uploadés */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-neutral-900">
            Fichiers sélectionnés ({uploadedFiles.length})
          </h4>
          
          <div className="space-y-2">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white border border-neutral-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="text-primary-500">
                    {getFileIcon(file.type)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">
                      {file.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <button
                    onClick={() => removeFile(file.name)}
                    className="text-neutral-400 hover:text-red-500 transition-colors"
                    aria-label="Supprimer le fichier"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Erreurs de validation */}
      {Object.keys(validationErrors).length > 0 && (
        <div className="space-y-2">
          {Object.entries(validationErrors).map(([fileName, error]) => (
            <div key={fileName} className="flex items-start space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-red-800">
                  {fileName}
                </p>
                <p className="text-sm text-red-600">
                  {error}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Message d'erreur général */}
      {error && (
        <div className="flex items-start space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-600">
            {error}
          </p>
        </div>
      )}

      {/* Informations importantes */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="font-medium text-blue-800 mb-1">
              Informations importantes
            </p>
            <ul className="text-blue-700 space-y-1">
              <li>• Assurez-vous que votre ordonnance est lisible et complète</li>
              <li>• Les fichiers sont traités de manière sécurisée</li>
              <li>• Aucune donnée n'est stockée de manière permanente</li>
              <li>• Nous vous contacterons pour confirmer la réception</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;

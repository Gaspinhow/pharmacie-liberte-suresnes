import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Syringe, 
  TestTube, 
  Calendar, 
  ClipboardList, 
  Accessibility, 
  Home, 
  Activity, 
  X, 
  Sparkles, 
  Leaf,
  ArrowRight,
  Clock,
  Users
} from 'lucide-react';

const ServiceCard = ({ service, variant = 'default' }) => {
  const getIcon = (iconName) => {
    const icons = {
      syringe: Syringe,
      'test-tube': TestTube,
      calendar: Calendar,
      'clipboard-list': ClipboardList,
      wheelchair: Accessibility,
      home: Home,
      activity: Activity,
      smoke: X,
      sparkles: Sparkles,
      leaf: Leaf
    };
    
    const IconComponent = icons[iconName] || Activity;
    return <IconComponent className="w-6 h-6" />;
  };

  const getServiceColor = (slug) => {
    const colors = {
      vaccination: 'primary',
      'tests-antigeniques': 'secondary',
      pda: 'accent',
      'bilan-medication': 'primary',
      'location-materiel': 'secondary',
      'maintien-domicile': 'accent',
      orthopedie: 'primary',
      'arret-tabac': 'secondary',
      'dermo-cosmetique': 'accent',
      micronutrition: 'primary'
    };
    
    return colors[slug] || 'primary';
  };

  const color = getServiceColor(service.slug);
  const colorClasses = {
    primary: 'bg-primary-100 text-primary-600',
    secondary: 'bg-secondary-100 text-secondary-600',
    accent: 'bg-accent-100 text-accent-600'
  };

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-lg p-4 shadow-soft border border-neutral-200 hover:shadow-medium transition-all duration-200">
        <div className="flex items-start space-x-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses[color]}`}>
            {getIcon(service.icon)}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-neutral-900 mb-1">
              {service.title}
            </h3>
            <p className="text-sm text-neutral-600 mb-3">
              {service.description}
            </p>
            <Link 
              to={`/services/${service.slug}`}
              className="inline-flex items-center text-sm text-primary-500 hover:text-primary-600 transition-colors"
            >
              En savoir plus
              <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200 hover:shadow-medium hover:-translate-y-1 transition-all duration-200">
        <div className="flex items-center space-x-4 mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[color]}`}>
            {getIcon(service.icon)}
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-neutral-900">
              {service.title}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-neutral-500">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Sur rendez-vous</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>Conseil personnalisé</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-neutral-600 mb-4">
          {service.description}
        </p>
        
        <Link 
          to={`/services/${service.slug}`}
          className="btn btn-primary w-full"
        >
          Découvrir ce service
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    );
  }

  return (
    <div className="card card-hover">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[color]}`}>
            {getIcon(service.icon)}
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-neutral-900">
              {service.title}
            </h3>
            {service.featured && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
                Service phare
              </span>
            )}
          </div>
        </div>
        
        <p className="text-neutral-600 mb-4">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between">
          <Link 
            to={`/services/${service.slug}`}
            className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors font-medium"
          >
            En savoir plus
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
          
          <div className="flex items-center space-x-2 text-sm text-neutral-500">
            <Clock className="w-4 h-4" />
            <span>Sur RDV</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

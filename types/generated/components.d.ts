import type { Schema, Struct } from '@strapi/strapi';

export interface ScheduleDeparture extends Struct.ComponentSchema {
  collectionName: 'components_schedule_departures';
  info: {
    displayName: 'Departure';
  };
  attributes: {
    Departure_schedule: Schema.Attribute.Component<
      'schedule.departure-schedule',
      true
    >;
    Ending_point_google_place_id: Schema.Attribute.String;
    Ending_point_name: Schema.Attribute.String;
    IDR_price_one_way_adult: Schema.Attribute.String;
    IDR_price_one_way_child: Schema.Attribute.String;
    IDR_price_return_adult: Schema.Attribute.String;
    IDR_price_return_child: Schema.Attribute.String;
    Price_child_age_range: Schema.Attribute.String;
    Starting_point_google_place_id: Schema.Attribute.String;
    Starting_point_name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ScheduleDepartureSchedule extends Struct.ComponentSchema {
  collectionName: 'components_schedule_departure_schedules';
  info: {
    displayName: 'Departure_schedule';
  };
  attributes: {
    Departure_time: Schema.Attribute.String;
    Return_time: Schema.Attribute.String;
  };
}

export interface SchemaOwns extends Struct.ComponentSchema {
  collectionName: 'components_schema_owns';
  info: {
    displayName: 'Owns';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Name: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface SharedLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'Links';
  };
  attributes: {
    Url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    Url: Schema.Attribute.String;
  };
}

export interface SharedQa extends Struct.ComponentSchema {
  collectionName: 'components_shared_qas';
  info: {
    displayName: 'QA';
    icon: 'bulletList';
  };
  attributes: {
    Answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    Blob: Schema.Attribute.Media<'images'>;
    Question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    Canonical_link: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
        minLength: 70;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
        minLength: 30;
      }>;
    nofollow: Schema.Attribute.Boolean;
    noindex: Schema.Attribute.Boolean;
    URL_slug: Schema.Attribute.String;
  };
}

export interface SharedSocialMediaLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_media_links';
  info: {
    displayName: 'Social-media-links';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'schedule.departure': ScheduleDeparture;
      'schedule.departure-schedule': ScheduleDepartureSchedule;
      'schema.owns': SchemaOwns;
      'shared.links': SharedLinks;
      'shared.menu': SharedMenu;
      'shared.qa': SharedQa;
      'shared.seo': SharedSeo;
      'shared.social-media-links': SharedSocialMediaLinks;
    }
  }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface SearchEngineMeta extends Schema.Component {
  collectionName: 'components_search_engine_metas';
  info: {
    displayName: 'Meta';
    icon: 'server';
  };
  attributes: {
    HTML_Title: Attribute.String;
    Meta_description: Attribute.String;
    noindex: Attribute.Boolean;
    nofollow: Attribute.Boolean;
    URL_slug: Attribute.String;
    Canonical_link: Attribute.String;
  };
}

export interface SchemaType extends Schema.Component {
  collectionName: 'components_schema_types';
  info: {
    displayName: 'Type';
  };
  attributes: {
    LocalBusiness: Attribute.Boolean;
    Landform: Attribute.Boolean;
    Accommodation: Attribute.Boolean;
    Restaurant: Attribute.Boolean;
    TouristAttraction: Attribute.Boolean;
  };
}

export interface SchemaQa extends Schema.Component {
  collectionName: 'components_schema_qas';
  info: {
    displayName: 'QA';
    description: '';
  };
  attributes: {
    Question: Attribute.String & Attribute.Required;
    Answer: Attribute.RichText & Attribute.Required;
    Blob: Attribute.Media<'images'>;
  };
}

export interface SchemaCuisine extends Schema.Component {
  collectionName: 'components_schema_cuisines';
  info: {
    displayName: 'Cuisine';
  };
  attributes: {
    Variant_name: Attribute.Enumeration<['Asian']>;
  };
}

export interface ScheduleDeparture extends Schema.Component {
  collectionName: 'components_schedule_departures';
  info: {
    displayName: 'Departure';
    icon: 'layout';
  };
  attributes: {
    Starting_point_name: Attribute.String & Attribute.Required;
    Ending_point_name: Attribute.String & Attribute.Required;
    Starting_point_google_place_id: Attribute.String & Attribute.Required;
    Ending_point_google_place_id: Attribute.String & Attribute.Required;
    IDR_price_one_way_adult: Attribute.BigInteger & Attribute.Required;
    IDR_price_return_adult: Attribute.BigInteger & Attribute.Required;
    IDR_price_one_way_child: Attribute.BigInteger;
    IDR_price_return_child: Attribute.BigInteger;
    Price_child_age_range: Attribute.String;
    Time: Attribute.Component<'schedule.departure-time', true>;
  };
}

export interface ScheduleDepartureTime extends Schema.Component {
  collectionName: 'components_schedule_departure_times';
  info: {
    displayName: 'Departure-time';
    icon: 'clock';
  };
  attributes: {
    Departure_time: Attribute.Time;
    Return_time: Attribute.Time;
  };
}

export interface MenuNavigation extends Schema.Component {
  collectionName: 'components_menu_navigations';
  info: {
    displayName: 'Navigation';
    icon: 'bulletList';
  };
  attributes: {
    Title: Attribute.String;
    Title_url: Attribute.String & Attribute.Required;
  };
}

export interface KindnessImpacts extends Schema.Component {
  collectionName: 'components_kindness_impacts';
  info: {
    displayName: 'Impacts';
    icon: 'bulletList';
  };
  attributes: {
    Value: Attribute.String;
    Value_unit: Attribute.String;
    Description: Attribute.RichText;
    Icon: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'search-engine.meta': SearchEngineMeta;
      'schema.type': SchemaType;
      'schema.qa': SchemaQa;
      'schema.cuisine': SchemaCuisine;
      'schedule.departure': ScheduleDeparture;
      'schedule.departure-time': ScheduleDepartureTime;
      'menu.navigation': MenuNavigation;
      'kindness.impacts': KindnessImpacts;
    }
  }
}

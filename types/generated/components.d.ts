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
      'kindness.impacts': KindnessImpacts;
    }
  }
}

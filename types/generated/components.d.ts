import type { Schema, Struct } from '@strapi/strapi';

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
    noindex: Schema.Attribute.Boolean & Schema.Attribute.Required;
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
      'schema.owns': SchemaOwns;
      'shared.links': SharedLinks;
      'shared.menu': SharedMenu;
      'shared.qa': SharedQa;
      'shared.seo': SharedSeo;
      'shared.social-media-links': SharedSocialMediaLinks;
    }
  }
}

import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAddress extends Struct.ComponentSchema {
  collectionName: 'components_shared_addresses';
  info: {
    displayName: 'address';
    icon: 'store';
  };
  attributes: {};
}

export interface SharedSocials extends Struct.ComponentSchema {
  collectionName: 'components_shared_socials';
  info: {
    displayName: 'socials';
    icon: 'earth';
  };
  attributes: {
    featured: Schema.Attribute.Boolean;
    order: Schema.Attribute.Integer;
    site: Schema.Attribute.Relation<'oneToOne', 'api::site.site'>;
    username: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.address': SharedAddress;
      'shared.socials': SharedSocials;
    }
  }
}

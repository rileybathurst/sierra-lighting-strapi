import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAddress extends Struct.ComponentSchema {
  collectionName: 'components_shared_addresses';
  info: {
    displayName: 'address';
    icon: 'store';
  };
  attributes: {};
}

export interface SharedDays extends Struct.ComponentSchema {
  collectionName: 'components_shared_days';
  info: {
    displayName: 'days';
  };
  attributes: {
    friday: Schema.Attribute.Boolean;
    monday: Schema.Attribute.Boolean;
    saturday: Schema.Attribute.Boolean;
    sunday: Schema.Attribute.Boolean;
    thursday: Schema.Attribute.Boolean;
    tuesday: Schema.Attribute.Boolean;
    wednesday: Schema.Attribute.Boolean;
  };
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
  export namespace Public {
    export interface ComponentSchemas {
      'shared.address': SharedAddress;
      'shared.days': SharedDays;
      'shared.socials': SharedSocials;
    }
  }
}

import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiAboutAbout extends Schema.SingleType {
  collectionName: 'abouts';
  info: {
    description: '';
    displayName: 'about';
    pluralName: 'abouts';
    singularName: 'about';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    addressLocality: Attribute.String;
    addressRegion: Attribute.String;
    alternateName: Attribute.String;
    businessName: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    defaultImage: Attribute.String;
    defaultImageAlt: Attribute.String;
    description: Attribute.RichText;
    email: Attribute.String;
    facebook: Attribute.String;
    geoLatitude: Attribute.Decimal;
    geoLongitude: Attribute.Decimal;
    geoRadius: Attribute.Integer;
    google: Attribute.String;
    googleReviews: Attribute.String;
    instagram: Attribute.String;
    itemType: Attribute.String;
    linkedin: Attribute.String;
    nextdoor: Attribute.String;
    openingHours: Attribute.String;
    paymentAccepted: Attribute.String;
    pinterest: Attribute.String;
    postalCode: Attribute.String;
    priceRange: Attribute.String;
    publishedAt: Attribute.DateTime;
    slogan: Attribute.String;
    telephone: Attribute.String;
    tiktok: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String;
    yelp: Attribute.String;
  };
}

export interface ApiAffiliationAffiliation extends Schema.CollectionType {
  collectionName: 'affiliations';
  info: {
    description: '';
    displayName: 'affiliation';
    pluralName: 'affiliations';
    singularName: 'affiliation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::affiliation.affiliation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    excerpt: Attribute.String;
    link: Attribute.String;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
    publishedAt: Attribute.DateTime;
    slug: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::affiliation.affiliation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAreaExploratrionAreaExploratrion extends Schema.SingleType {
  collectionName: 'area_exploratrions';
  info: {
    displayName: 'area-exploratrion';
    pluralName: 'area-exploratrions';
    singularName: 'area-exploratrion';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::area-exploratrion.area-exploratrion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::area-exploratrion.area-exploratrion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAreaArea extends Schema.CollectionType {
  collectionName: 'areas';
  info: {
    description: '';
    displayName: 'Area';
    pluralName: 'areas';
    singularName: 'area';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    areas: Attribute.Relation<'api::area.area', 'oneToMany', 'api::area.area'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::area.area', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.RichText;
    excerpt: Attribute.Text;
    featured: Attribute.Boolean;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    jobs: Attribute.Relation<'api::area.area', 'manyToMany', 'api::job.job'>;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    plans: Attribute.Relation<'api::area.area', 'manyToMany', 'api::plan.plan'>;
    postalCode: Attribute.Integer;
    projects: Attribute.Relation<
      'api::area.area',
      'oneToMany',
      'api::project.project'
    >;
    publishedAt: Attribute.DateTime;
    region: Attribute.Relation<'api::area.area', 'manyToOne', 'api::area.area'>;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    state: Attribute.Enumeration<['california', 'nevada']>;
    tagline: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::area.area', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    venues: Attribute.Relation<
      'api::area.area',
      'oneToMany',
      'api::venue.venue'
    >;
  };
}

export interface ApiFarFar extends Schema.CollectionType {
  collectionName: 'fars';
  info: {
    description: '';
    displayName: 'faq';
    pluralName: 'fars';
    singularName: 'far';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    answer: Attribute.Text;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::far.far', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    question: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::far.far', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFeedbackFeedback extends Schema.SingleType {
  collectionName: 'feedbacks';
  info: {
    displayName: 'feedback';
    pluralName: 'feedbacks';
    singularName: 'feedback';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::feedback.feedback',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    negative: Attribute.Text;
    positive: Attribute.Text;
    starting: Attribute.Text;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::feedback.feedback',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeroHero extends Schema.SingleType {
  collectionName: 'heroes';
  info: {
    description: '';
    displayName: 'hero';
    pluralName: 'heroes';
    singularName: 'hero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    back: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::hero.hero', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    front: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::hero.hero', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiImageGrabImageGrab extends Schema.CollectionType {
  collectionName: 'image_grabs';
  info: {
    displayName: 'image-grab';
    pluralName: 'image-grabs';
    singularName: 'image-grab';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::image-grab.image-grab',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publishedAt: Attribute.DateTime;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::image-grab.image-grab',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJobJob extends Schema.CollectionType {
  collectionName: 'jobs';
  info: {
    description: '';
    displayName: 'job';
    pluralName: 'jobs';
    singularName: 'job';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    areas: Attribute.Relation<'api::job.job', 'manyToMany', 'api::area.area'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::job.job', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.RichText;
    employmentType: Attribute.String;
    publishedAt: Attribute.DateTime;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::job.job', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    validThrough: Attribute.Date;
  };
}

export interface ApiLightGroupLightGroup extends Schema.CollectionType {
  collectionName: 'light_groups';
  info: {
    description: '';
    displayName: 'light-group';
    pluralName: 'light-groups';
    singularName: 'light-group';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::light-group.light-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    excerpt: Attribute.String;
    lights: Attribute.Relation<
      'api::light-group.light-group',
      'manyToMany',
      'api::light.light'
    >;
    name: Attribute.String;
    outdoor: Attribute.Boolean;
    publishedAt: Attribute.DateTime;
    services: Attribute.Relation<
      'api::light-group.light-group',
      'manyToMany',
      'api::service.service'
    >;
    slug: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::light-group.light-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    weddingOrder: Attribute.Integer;
    xmasOrder: Attribute.Integer;
  };
}

export interface ApiLightLight extends Schema.CollectionType {
  collectionName: 'lights';
  info: {
    description: '';
    displayName: 'Light';
    pluralName: 'lights';
    singularName: 'light';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    alias: Attribute.Text;
    altGallery: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    byline: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::light.light',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    detail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    excerpt: Attribute.String;
    featured_service: Attribute.Relation<
      'api::light.light',
      'manyToMany',
      'api::service.service'
    >;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    light_groups: Attribute.Relation<
      'api::light.light',
      'manyToMany',
      'api::light-group.light-group'
    >;
    lights: Attribute.Relation<
      'api::light.light',
      'oneToMany',
      'api::light.light'
    >;
    lookbooks: Attribute.Relation<
      'api::light.light',
      'manyToMany',
      'api::lookbook.lookbook'
    >;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    outdoor: Attribute.Boolean;
    projects: Attribute.Relation<
      'api::light.light',
      'manyToMany',
      'api::project.project'
    >;
    publishedAt: Attribute.DateTime;
    related: Attribute.Relation<
      'api::light.light',
      'manyToOne',
      'api::light.light'
    >;
    services: Attribute.Relation<
      'api::light.light',
      'manyToMany',
      'api::service.service'
    >;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::light.light',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    weddingOrder: Attribute.Integer;
    xmasOrder: Attribute.Integer;
  };
}

export interface ApiLookbookLookbook extends Schema.CollectionType {
  collectionName: 'lookbooks';
  info: {
    description: '';
    displayName: 'Lookbook';
    pluralName: 'lookbooks';
    singularName: 'lookbook';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lookbook.lookbook',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.RichText;
    flex: Attribute.Integer & Attribute.DefaultTo<1>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    lights: Attribute.Relation<
      'api::lookbook.lookbook',
      'manyToMany',
      'api::light.light'
    >;
    order: Attribute.Integer;
    project: Attribute.Relation<
      'api::lookbook.lookbook',
      'oneToOne',
      'api::project.project'
    >;
    publishedAt: Attribute.DateTime;
    service: Attribute.Relation<
      'api::lookbook.lookbook',
      'manyToOne',
      'api::service.service'
    >;
    spread: Attribute.Integer;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::lookbook.lookbook',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    vendors: Attribute.Relation<
      'api::lookbook.lookbook',
      'oneToMany',
      'api::vendor.vendor'
    >;
    venue: Attribute.Relation<
      'api::lookbook.lookbook',
      'oneToOne',
      'api::venue.venue'
    >;
  };
}

export interface ApiMinimumMinimum extends Schema.SingleType {
  collectionName: 'minimums';
  info: {
    displayName: 'minimum';
    pluralName: 'minimums';
    singularName: 'minimum';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::minimum.minimum',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    dollars: Attribute.Integer;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::minimum.minimum',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMissingMissing extends Schema.SingleType {
  collectionName: 'missings';
  info: {
    displayName: 'missing';
    pluralName: 'missings';
    singularName: 'missing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::missing.missing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.RichText;
    publishedAt: Attribute.DateTime;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::missing.missing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPlanPlan extends Schema.CollectionType {
  collectionName: 'plans';
  info: {
    description: '';
    displayName: 'plan';
    pluralName: 'plans';
    singularName: 'plan';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    address: Attribute.String & Attribute.Unique;
    areas: Attribute.Relation<'api::plan.plan', 'manyToMany', 'api::area.area'>;
    basicNotes: Attribute.Text;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::plan.plan', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    jobber: Attribute.Integer & Attribute.Unique;
    jobbertakedown: Attribute.Integer;
    name: Attribute.String;
    notes: Attribute.RichText;
    publishedAt: Attribute.DateTime;
    slug: Attribute.String & Attribute.Unique;
    svg: Attribute.Text;
    takedownday: Attribute.Relation<
      'api::plan.plan',
      'manyToOne',
      'api::takedownday.takedownday'
    >;
    takedownFlexOrder: Attribute.Integer;
    teams: Attribute.Relation<'api::plan.plan', 'oneToMany', 'api::team.team'>;
    timerFallback: Attribute.String;
    timerHours: Attribute.Integer;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::plan.plan', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    zip: Attribute.Integer;
  };
}

export interface ApiProcessProcess extends Schema.CollectionType {
  collectionName: 'processes';
  info: {
    description: '';
    displayName: 'process';
    pluralName: 'processes';
    singularName: 'process';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::process.process',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    markdown: Attribute.RichText;
    name: Attribute.String;
    order: Attribute.Integer;
    publishedAt: Attribute.DateTime;
    services: Attribute.Relation<
      'api::process.process',
      'manyToMany',
      'api::service.service'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::process.process',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProjectDescriptionProjectDescription
  extends Schema.SingleType {
  collectionName: 'project_descriptions';
  info: {
    displayName: 'project-description';
    pluralName: 'project-descriptions';
    singularName: 'project-description';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project-description.project-description',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::project-description.project-description',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProjectProject extends Schema.CollectionType {
  collectionName: 'projects';
  info: {
    description: '';
    displayName: 'project';
    pluralName: 'projects';
    singularName: 'project';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    area: Attribute.Relation<
      'api::project.project',
      'manyToOne',
      'api::area.area'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    darkImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.RichText;
    excerpt: Attribute.Text;
    gallery: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    hero: Attribute.Boolean;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    lights: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::light.light'
    >;
    ogimage: Attribute.String;
    projected: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'api::showcase.showcase'
    >;
    publishedAt: Attribute.DateTime;
    services: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::service.service'
    >;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    teams: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::team.team'
    >;
    testimonial: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'api::testimonial.testimonial'
    >;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    vendors: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::vendor.vendor'
    >;
    venue: Attribute.Relation<
      'api::project.project',
      'manyToOne',
      'api::venue.venue'
    >;
  };
}

export interface ApiQualityQuality extends Schema.CollectionType {
  collectionName: 'qualities';
  info: {
    displayName: 'quality';
    pluralName: 'qualities';
    singularName: 'quality';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::quality.quality',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.RichText;
    eyebrow: Attribute.String;
    name: Attribute.String;
    order: Attribute.Integer;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::quality.quality',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeasonSeason extends Schema.SingleType {
  collectionName: 'seasons';
  info: {
    displayName: 'season';
    pluralName: 'seasons';
    singularName: 'season';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::season.season',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::season.season',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    wedding: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ApiServiceService extends Schema.CollectionType {
  collectionName: 'services';
  info: {
    description: '';
    displayName: 'service';
    pluralName: 'services';
    singularName: 'service';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    affiliation: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'api::affiliation.affiliation'
    >;
    after_the_triptych: Attribute.RichText;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.RichText;
    excerpt: Attribute.String;
    featured: Attribute.Boolean;
    featured_lights: Attribute.Relation<
      'api::service.service',
      'manyToMany',
      'api::light.light'
    >;
    hero_dark: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    hero_light: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    light_groups: Attribute.Relation<
      'api::service.service',
      'manyToMany',
      'api::light-group.light-group'
    >;
    lights: Attribute.Relation<
      'api::service.service',
      'manyToMany',
      'api::light.light'
    >;
    lookbookCover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    lookbooks: Attribute.Relation<
      'api::service.service',
      'oneToMany',
      'api::lookbook.lookbook'
    >;
    name: Attribute.String;
    ogimage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    processes: Attribute.Relation<
      'api::service.service',
      'manyToMany',
      'api::process.process'
    >;
    projects: Attribute.Relation<
      'api::service.service',
      'manyToMany',
      'api::project.project'
    >;
    publishedAt: Attribute.DateTime;
    showcaseDescription: Attribute.RichText;
    showcases: Attribute.Relation<
      'api::service.service',
      'oneToMany',
      'api::showcase.showcase'
    >;
    slug: Attribute.String;
    testimonials: Attribute.Relation<
      'api::service.service',
      'manyToMany',
      'api::testimonial.testimonial'
    >;
    triptych: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    vendors: Attribute.Relation<
      'api::service.service',
      'manyToMany',
      'api::vendor.vendor'
    >;
    venues: Attribute.Relation<
      'api::service.service',
      'manyToMany',
      'api::venue.venue'
    >;
    videoMux: Attribute.String;
    videos: Attribute.Relation<
      'api::service.service',
      'oneToMany',
      'api::video.video'
    >;
  };
}

export interface ApiShowcaseShowcase extends Schema.CollectionType {
  collectionName: 'showcases';
  info: {
    description: '';
    displayName: 'showcase';
    pluralName: 'showcases';
    singularName: 'showcase';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::showcase.showcase',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.RichText;
    price: Attribute.String;
    project: Attribute.Relation<
      'api::showcase.showcase',
      'oneToOne',
      'api::project.project'
    >;
    publishedAt: Attribute.DateTime;
    roofline: Attribute.String;
    service: Attribute.Relation<
      'api::showcase.showcase',
      'manyToOne',
      'api::service.service'
    >;
    tier: Attribute.Enumeration<['gold', 'silver', 'bronze']>;
    tree: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::showcase.showcase',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTakedowndayTakedownday extends Schema.CollectionType {
  collectionName: 'takedowndays';
  info: {
    description: '';
    displayName: 'takedownday';
    pluralName: 'takedowndays';
    singularName: 'takedownday';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::takedownday.takedownday',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    crew: Attribute.Enumeration<['dani', 'alex', 'andrew']>;
    date: Attribute.Date;
    plans: Attribute.Relation<
      'api::takedownday.takedownday',
      'oneToMany',
      'api::plan.plan'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::takedownday.takedownday',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTeamTeam extends Schema.CollectionType {
  collectionName: 'teams';
  info: {
    description: '';
    displayName: 'team';
    pluralName: 'teams';
    singularName: 'team';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    avatar: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bio: Attribute.RichText;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::team.team', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    excerpt: Attribute.String;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    plan: Attribute.Relation<'api::team.team', 'manyToOne', 'api::plan.plan'>;
    projects: Attribute.Relation<
      'api::team.team',
      'manyToMany',
      'api::project.project'
    >;
    publishedAt: Attribute.DateTime;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::team.team', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTestimonialTestimonial extends Schema.CollectionType {
  collectionName: 'testimonials';
  info: {
    description: '';
    displayName: 'testimonial';
    pluralName: 'testimonials';
    singularName: 'testimonial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    customer: Attribute.String & Attribute.Required & Attribute.Unique;
    excerpt: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    link: Attribute.String;
    order: Attribute.Integer;
    platform: Attribute.Enumeration<['google', 'yelp', 'sierra lighting']>;
    position: Attribute.String;
    project: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'api::project.project'
    >;
    publishedAt: Attribute.DateTime;
    review: Attribute.Text;
    services: Attribute.Relation<
      'api::testimonial.testimonial',
      'manyToMany',
      'api::service.service'
    >;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    stars: Attribute.Decimal;
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    vendor: Attribute.Relation<
      'api::testimonial.testimonial',
      'manyToOne',
      'api::vendor.vendor'
    >;
    venue: Attribute.Relation<
      'api::testimonial.testimonial',
      'manyToOne',
      'api::venue.venue'
    >;
  };
}

export interface ApiTopbarTopbar extends Schema.SingleType {
  collectionName: 'topbars';
  info: {
    description: '';
    displayName: 'topbar';
    pluralName: 'topbars';
    singularName: 'topbar';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::topbar.topbar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    defaultHoliday: Attribute.String;
    defaultHolidayLink: Attribute.String;
    defaultWedding: Attribute.String;
    defaultWeddingLink: Attribute.String;
    link: Attribute.String;
    publishedAt: Attribute.DateTime;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::topbar.topbar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVendorVendor extends Schema.CollectionType {
  collectionName: 'vendors';
  info: {
    description: '';
    displayName: 'Vendor';
    pluralName: 'vendors';
    singularName: 'vendor';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vendor.vendor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    excerpt: Attribute.String & Attribute.Required;
    facebook: Attribute.String;
    instagram: Attribute.String;
    lookbook: Attribute.Relation<
      'api::vendor.vendor',
      'manyToOne',
      'api::lookbook.lookbook'
    >;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    pinterest: Attribute.String;
    profile: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    projects: Attribute.Relation<
      'api::vendor.vendor',
      'manyToMany',
      'api::project.project'
    >;
    publishedAt: Attribute.DateTime;
    service: Attribute.Enumeration<
      ['photography', 'planning', 'production', 'floral']
    >;
    services: Attribute.Relation<
      'api::vendor.vendor',
      'manyToMany',
      'api::service.service'
    >;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    testimonials: Attribute.Relation<
      'api::vendor.vendor',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::vendor.vendor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    website: Attribute.String;
  };
}

export interface ApiVenueVenue extends Schema.CollectionType {
  collectionName: 'venues';
  info: {
    description: '';
    displayName: 'Venue';
    pluralName: 'venues';
    singularName: 'venue';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    address: Attribute.RichText;
    area: Attribute.Relation<'api::venue.venue', 'manyToOne', 'api::area.area'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::venue.venue',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    excerpt: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    phone: Attribute.Integer;
    projects: Attribute.Relation<
      'api::venue.venue',
      'oneToMany',
      'api::project.project'
    >;
    publishedAt: Attribute.DateTime;
    services: Attribute.Relation<
      'api::venue.venue',
      'manyToMany',
      'api::service.service'
    >;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    testimonials: Attribute.Relation<
      'api::venue.venue',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::venue.venue',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    uses: Attribute.Enumeration<['wedding', 'non-wedding', 'corporate']>;
    venueImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    website: Attribute.String;
  };
}

export interface ApiVideoVideo extends Schema.CollectionType {
  collectionName: 'videos';
  info: {
    description: '';
    displayName: 'video';
    pluralName: 'videos';
    singularName: 'video';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::video.video',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    mux: Attribute.String;
    name: Attribute.String;
    publishedAt: Attribute.DateTime;
    service: Attribute.Relation<
      'api::video.video',
      'manyToOne',
      'api::service.service'
    >;
    thumbnailTime: Attribute.Integer;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::video.video',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about.about': ApiAboutAbout;
      'api::affiliation.affiliation': ApiAffiliationAffiliation;
      'api::area-exploratrion.area-exploratrion': ApiAreaExploratrionAreaExploratrion;
      'api::area.area': ApiAreaArea;
      'api::far.far': ApiFarFar;
      'api::feedback.feedback': ApiFeedbackFeedback;
      'api::hero.hero': ApiHeroHero;
      'api::image-grab.image-grab': ApiImageGrabImageGrab;
      'api::job.job': ApiJobJob;
      'api::light-group.light-group': ApiLightGroupLightGroup;
      'api::light.light': ApiLightLight;
      'api::lookbook.lookbook': ApiLookbookLookbook;
      'api::minimum.minimum': ApiMinimumMinimum;
      'api::missing.missing': ApiMissingMissing;
      'api::plan.plan': ApiPlanPlan;
      'api::process.process': ApiProcessProcess;
      'api::project-description.project-description': ApiProjectDescriptionProjectDescription;
      'api::project.project': ApiProjectProject;
      'api::quality.quality': ApiQualityQuality;
      'api::season.season': ApiSeasonSeason;
      'api::service.service': ApiServiceService;
      'api::showcase.showcase': ApiShowcaseShowcase;
      'api::takedownday.takedownday': ApiTakedowndayTakedownday;
      'api::team.team': ApiTeamTeam;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::topbar.topbar': ApiTopbarTopbar;
      'api::vendor.vendor': ApiVendorVendor;
      'api::venue.venue': ApiVenueVenue;
      'api::video.video': ApiVideoVideo;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}

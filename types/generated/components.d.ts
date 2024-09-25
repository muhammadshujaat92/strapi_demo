import type { Schema, Attribute } from '@strapi/strapi';

export interface TourPackageCardTourPackageCard extends Schema.Component {
  collectionName: 'components_tour_package_card_tour_package_cards';
  info: {
    displayName: 'TourPackageCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    price: Attribute.String;
    oldPrice: Attribute.String;
    Sale: Attribute.Boolean;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buttonText: Attribute.String;
    Days: Attribute.String;
  };
}

export interface TestimonialContentTestimonialContent extends Schema.Component {
  collectionName: 'components_testimonial_content_testimonial_contents';
  info: {
    displayName: 'testimonialContent';
    description: '';
  };
  attributes: {
    ReviewText: Attribute.Text;
    AuthorName: Attribute.String;
    AuthorDesignation: Attribute.String;
    AuthorCountry: Attribute.String;
  };
}

export interface SlidesHeaderSlides extends Schema.Component {
  collectionName: 'components_slides_header_slides';
  info: {
    displayName: 'HeaderSlides';
  };
  attributes: {
    Title: Attribute.String;
    Paragraph: Attribute.Text;
    ButtonText: Attribute.String;
    Category: Attribute.String;
  };
}

export interface SideboxSideBox extends Schema.Component {
  collectionName: 'components_sidebox_side_boxes';
  info: {
    displayName: 'sideBox';
    description: '';
  };
  attributes: {
    UpperText: Attribute.String;
    LowerText: Attribute.Text;
  };
}

export interface SideBoxSideBox extends Schema.Component {
  collectionName: 'components_side_box_side_boxes';
  info: {
    displayName: 'sideBox';
    description: '';
  };
  attributes: {
    upperText: Attribute.String;
    lowerText: Attribute.Text;
  };
}

export interface Section5Section5 extends Schema.Component {
  collectionName: 'components_section5_section5s';
  info: {
    displayName: 'Section5';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    BoxHeading1: Attribute.String;
    BoxHeading2: Attribute.String;
    BoxText1: Attribute.String;
    BoxText2: Attribute.String;
    content: Attribute.Component<'box-side.box-side', true>;
  };
}

export interface Section4Section4 extends Schema.Component {
  collectionName: 'components_section4_section4s';
  info: {
    displayName: 'section4';
  };
  attributes: {
    Title: Attribute.String;
    Paragraph: Attribute.Text;
    sideBox: Attribute.Component<'box.box', true>;
  };
}

export interface Section2Section2 extends Schema.Component {
  collectionName: 'components_section2_section2s';
  info: {
    displayName: 'Section2';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Attribute.String;
    Paragraph: Attribute.Text;
    ButtonText: Attribute.String;
  };
}

export interface Section1Section1 extends Schema.Component {
  collectionName: 'components_section1_section1s';
  info: {
    displayName: 'Section1';
  };
  attributes: {
    Title: Attribute.String;
    Paragraph: Attribute.Text;
    ButtonText: Attribute.String;
    BackgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    BackgroundImageTitle: Attribute.String;
  };
}

export interface NavlinksNavlinks extends Schema.Component {
  collectionName: 'components_navlinks_navlinks';
  info: {
    displayName: 'Navlinks';
    description: '';
  };
  attributes: {
    Link: Attribute.String;
  };
}

export interface LastsectionLastSection extends Schema.Component {
  collectionName: 'components_lastsection_last_sections';
  info: {
    displayName: 'lastSection';
  };
  attributes: {
    Title: Attribute.String;
    Heading: Attribute.String;
    Paragraph: Attribute.Text;
    contactDetail: Attribute.Component<'contact-detail.contact-detail', true>;
  };
}

export interface HometestimonialHomeTestimonials extends Schema.Component {
  collectionName: 'components_hometestimonial_home_testimonials';
  info: {
    displayName: 'HomeTestimonials';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Paragraph: Attribute.Text;
    userImages: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    testimonialContent: Attribute.Component<'contents.content', true>;
  };
}

export interface FaqSectionFaqSection extends Schema.Component {
  collectionName: 'components_faq_section_faq_sections';
  info: {
    displayName: 'FAQSection';
    description: '';
  };
  attributes: {
    BackImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    FrontImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    frontText1: Attribute.String;
    frontText2: Attribute.String;
    Heading1: Attribute.String;
    Heading2: Attribute.String;
    Text: Attribute.Text;
    AccordianData: Attribute.Component<'faq-content.faq-content', true>;
  };
}

export interface FaqContentFaqContent extends Schema.Component {
  collectionName: 'components_faq_content_faq_contents';
  info: {
    displayName: 'faqContent';
  };
  attributes: {
    questionText: Attribute.String;
    answerText: Attribute.Text;
  };
}

export interface DemoDemo extends Schema.Component {
  collectionName: 'components_demo_demos';
  info: {
    displayName: 'demo';
  };
  attributes: {
    fieldname: Attribute.String;
  };
}

export interface ContentsContent extends Schema.Component {
  collectionName: 'components_contents_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    ReviewText: Attribute.Text;
    AuthorName: Attribute.String;
    AuthorDesignation: Attribute.String;
    AuthorCountry: Attribute.String;
  };
}

export interface ContentsBoxContent extends Schema.Component {
  collectionName: 'components_contents_box_contents';
  info: {
    displayName: 'BoxContent';
  };
  attributes: {
    Text: Attribute.String;
    Paragraph: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContactPageContact extends Schema.Component {
  collectionName: 'components_contact_page_contacts';
  info: {
    displayName: 'contact';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    Theme: Attribute.String;
    headingTheme: Attribute.String;
  };
}

export interface ContactDetailContactDetail extends Schema.Component {
  collectionName: 'components_contact_detail_contact_details';
  info: {
    displayName: 'contactDetail';
  };
  attributes: {
    detail: Attribute.String;
  };
}

export interface CardDataCard extends Schema.Component {
  collectionName: 'components_card_data_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    oldPrice2: Attribute.String;
    oldPrice3: Attribute.String;
    Sale: Attribute.Boolean;
  };
}

export interface CardDataCardData extends Schema.Component {
  collectionName: 'components_card_data_card_data';
  info: {
    displayName: 'CardData';
  };
  attributes: {};
}

export interface BoxSideBoxSide extends Schema.Component {
  collectionName: 'components_box_side_box_sides';
  info: {
    displayName: 'boxSide';
    description: '';
  };
  attributes: {
    Text: Attribute.String;
    Paragraph: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BoxBox extends Schema.Component {
  collectionName: 'components_box_boxes';
  info: {
    displayName: 'box';
  };
  attributes: {
    UpperText: Attribute.String;
    LowerText: Attribute.Text;
  };
}

export interface AccordianDataAccordian extends Schema.Component {
  collectionName: 'components_accordian_data_accordians';
  info: {
    displayName: 'accordian';
  };
  attributes: {
    questionText: Attribute.String;
    answerText: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tour-package-card.tour-package-card': TourPackageCardTourPackageCard;
      'testimonial-content.testimonial-content': TestimonialContentTestimonialContent;
      'slides.header-slides': SlidesHeaderSlides;
      'sidebox.side-box': SideboxSideBox;
      'side-box.side-box': SideBoxSideBox;
      'section5.section5': Section5Section5;
      'section4.section4': Section4Section4;
      'section2.section2': Section2Section2;
      'section1.section1': Section1Section1;
      'navlinks.navlinks': NavlinksNavlinks;
      'lastsection.last-section': LastsectionLastSection;
      'hometestimonial.home-testimonials': HometestimonialHomeTestimonials;
      'faq-section.faq-section': FaqSectionFaqSection;
      'faq-content.faq-content': FaqContentFaqContent;
      'demo.demo': DemoDemo;
      'contents.content': ContentsContent;
      'contents.box-content': ContentsBoxContent;
      'contact-page.contact': ContactPageContact;
      'contact-detail.contact-detail': ContactDetailContactDetail;
      'card-data.card': CardDataCard;
      'card-data.card-data': CardDataCardData;
      'box-side.box-side': BoxSideBoxSide;
      'box.box': BoxBox;
      'accordian-data.accordian': AccordianDataAccordian;
    }
  }
}

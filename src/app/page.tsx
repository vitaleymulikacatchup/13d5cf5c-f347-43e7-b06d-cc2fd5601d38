"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Flame, Crown, TrendingUp, MapPin, Users, Globe, Award, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="animatedGrid"
      cardStyle="glass-elevated"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Burger King"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763968534214-gdlz43iv.jpg"
          logoAlt="Burger King"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Flame Grilled to Perfection"
          description="Experience the taste of freshly flame-grilled burgers made with quality ingredients. Your Majesty awaits."
          tag="Fast Food Excellence"
          tagIcon={Flame}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763968535579-0wvze3qs.jpg"
          imageAlt="Fresh flame-grilled burger"
          buttons={[
            {
              text: "Order Online",
              href: "products"
            },
            {
              text: "Find Location",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Menu"
          description="Discover our signature menu items crafted for you"
          tag="Popular Items"
          tagIcon={Crown}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",
              name: "Whopper",
              price: "$6.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763968536249-4pljn0f4.jpg",
              imageAlt: "Flame-grilled Whopper burger"
            },
            {
              id: "2",
              name: "Crispy Fries",
              price: "$3.49",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763968536926-6yrdv8w3.jpg",
              imageAlt: "Golden crispy french fries"
            },
            {
              id: "3",
              name: "Chicken Sandwich",
              price: "$5.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763968537656-2rjvblri.jpg",
              imageAlt: "Crispy fried chicken sandwich"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="By The Numbers"
          description="See why Burger King is the choice of millions worldwide"
          tag="Our Achievements"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="four-items-2x2-equal-grid"
          metrics={[
            {
              id: "1",
              value: "18000",
              title: "Restaurants",
              description: "Worldwide locations serving fresh burgers daily",
              icon: MapPin
            },
            {
              id: "2",
              value: "100M",
              title: "Customers",
              description: "Satisfied customers served annually",
              icon: Users
            },
            {
              id: "3",
              value: "50+",
              title: "Countries",
              description: "Global presence and international expansion",
              icon: Globe
            },
            {
              id: "4",
              value: "75",
              title: "Years",
              description: "Heritage of quality and customer loyalty",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Join millions who trust Burger King for quality and taste"
          tag="Customer Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Food Enthusiast",
              company: "Regular Customer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763968538441-8xys2ygy.jpg",
              imageAlt: "Sarah Johnson testimonial"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Owner",
              company: "Local Resident",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763968539331-kd805wxt.jpg",
              imageAlt: "Michael Chen testimonial"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Student",
              company: "Campus Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763968539866-aqxevzcr.jpg",
              imageAlt: "Emily Rodriguez testimonial"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Family Dad",
              company: "Suburban Family",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763968540465-fbxmcb7v.jpg",
              imageAlt: "David Kim testimonial"
            },
            {
              id: "5",
              name: "Jessica Taylor",
              role: "Foodie",
              company: "Social Media Influencer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763968541267-5z9j3ea2.jpg",
              imageAlt: "Jessica Taylor testimonial"
            },
            {
              id: "6",
              name: "Robert Martinez",
              role: "Executive",
              company: "Corporate Client",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763968542281-3ufuc6cy.jpg",
              imageAlt: "Robert Martinez testimonial"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutMetric
          title="Your Majesty Deserves Quality"
          description={[
            "Since 1954, Burger King has been delivering flame-grilled goodness to customers worldwide. We are committed to using quality ingredients, innovative cooking methods, and exceptional customer service to create memorable dining experiences."
          ]}
          metrics={[
            {
              label: "Years of Excellence",
              value: "70+"
            },
            {
              label: "Daily Customers Served",
              value: "25M+"
            }
          ]}
          showBorder={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Have questions or want to place a special order? Reach out to us and we will get back to you shortly."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email Address",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us what you think or place your order...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763968543080-gfqlpm1r.jpg"
          imageAlt="Burger King Restaurant"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Burger King"
          columns={[
            {
              items: [
                {
                  label: "Menu",
                  href: "products"
                },
                {
                  label: "Locations",
                  href: "contact"
                },
                {
                  label: "Careers",
                  href: "#careers"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Delivery",
                  href: "#delivery"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "#privacy"
                },
                {
                  label: "Terms & Conditions",
                  href: "#terms"
                },
                {
                  label: "Accessibility",
                  href: "#accessibility"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
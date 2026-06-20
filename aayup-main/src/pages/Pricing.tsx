import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FloatingLogo } from "@/components/ui/floating-logo";
import { Star, Smartphone, Globe, Zap, Gift } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <Navigation />

      <section className="pt-32 pb-12 relative">
        <FloatingLogo />
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h1>
            <p className="text-xl text-foreground/70">
              Simple, Transparent Pricing — Choose the plan that works best for your business. All plans include our quality guarantee.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 glass-card">
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Modern Design</h3>
                  <p className="text-foreground/70">Clean, responsive designs that convert visitors into customers</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 glass-card">
              <div className="flex items-start gap-3">
                <Gift className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
                  <p className="text-foreground/70">Get help when you need it from our expert team</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 glass-card">
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
                  <p className="text-foreground/70">Enterprise-grade security and 99.9% uptime guarantee</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Website Development Plans */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Website Development Plans</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 glass-card">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Basic Website</h3>
                    <p className="text-foreground/70 text-sm">Perfect for small businesses starting their online journey</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">₹8,000</div>
                    <div className="text-sm text-foreground/70">One-time payment</div>
                  </div>
                </div>

                <ul className="mb-4 list-disc list-inside text-foreground/80 space-y-2">
                  <li>Up to 5 Pages</li>
                  <li>Fully Responsive Design</li>
                  <li>SEO-ready Structure</li>
                  <li>SSL Certificate</li>
                  <li>Contact Form Integration</li>
                  <li>WhatsApp Integration</li>
                  <li>1 Year Technical Support</li>
                </ul>
                <a
                  href={`https://wa.me/917030839883?text=${encodeURIComponent("Hello, I'm interested in the Basic Website plan (₹8,000). Please share next steps.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full">Contact via WhatsApp</Button>
                </a>
              </Card>

              <Card className="p-6 glass-card border-2 border-primary relative">
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">Most Popular</div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Professional Website</h3>
                    <p className="text-foreground/70 text-sm">Comprehensive solution for established businesses</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">₹12,000</div>
                    <div className="text-sm text-foreground/70">One-time payment</div>
                  </div>
                </div>

                <ul className="mb-4 list-disc list-inside text-foreground/80 space-y-2">
                  <li>10+ Custom Pages</li>
                  <li>Blog Integration</li>
                  <li>Advanced UI/UX Design</li>
                  <li>Speed Optimization</li>
                  <li>Basic Admin Panel</li>
                  <li>WhatsApp Business Integration</li>
                  <li>1 Year Priority Support</li>
                </ul>
                <a
                  href={`https://wa.me/917030839883?text=${encodeURIComponent("Hello, I'm interested in the Professional Website plan (₹12,000). Please share next steps.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full">Contact via WhatsApp</Button>
                </a>
              </Card>

              <Card className="p-6 glass-card">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">E-commerce Website</h3>
                    <p className="text-foreground/70 text-sm">Complete online store solution</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">₹20,000</div>
                    <div className="text-sm text-foreground/70">One-time payment</div>
                  </div>
                </div>

                <ul className="mb-4 list-disc list-inside text-foreground/80 space-y-2">
                  <li>Product Catalog Management</li>
                  <li>Shopping Cart & Checkout</li>
                  <li>Payment Gateway Integration</li>
                  <li>Advanced Admin Panel</li>
                  <li>WhatsApp Order Notifications</li>
                  <li>1 Year Premium Support</li>
                </ul>
                <a
                  href={`https://wa.me/917030839883?text=${encodeURIComponent("Hello, I'm interested in the E-commerce Website plan (₹20,000). Please share next steps.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full">Contact via WhatsApp</Button>
                </a>
              </Card>
            </div>
          </div>

          {/* App Development Plans */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">App Development Plans</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 glass-card">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Starter App</h3>
                    <p className="text-foreground/70 text-sm">Cross-platform app for startups</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">₹26,000</div>
                    <div className="text-sm text-foreground/70">One-time payment</div>
                  </div>
                </div>

                <ul className="mb-4 list-disc list-inside text-foreground/80 space-y-2">
                  <li>Hybrid App Development</li>
                  <li>Secure Authentication</li>
                  <li>Basic UI/UX Design</li>
                  <li>Admin Dashboard</li>
                  <li>1 Year Technical Support</li>
                </ul>
                <a
                  href={`https://wa.me/917030839883?text=${encodeURIComponent("Hello, I'm interested in the Starter App plan (₹26,000). Please share details.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full">Contact via WhatsApp</Button>
                </a>
              </Card>

              <Card className="p-6 glass-card border-2 border-primary relative">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Business App</h3>
                    <p className="text-foreground/70 text-sm">Feature-rich app for growing brands</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">₹40,000</div>
                    <div className="text-sm text-foreground/70">One-time payment</div>
                  </div>
                </div>

                <ul className="mb-4 list-disc list-inside text-foreground/80 space-y-2">
                  <li>Custom UI/UX Design</li>
                  <li>API Integration</li>
                  <li>Push Notifications</li>
                  <li>Advanced Admin Panel</li>
                  <li>1 Year Priority Support</li>
                </ul>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">Most Popular</div>
                <a
                  href={`https://wa.me/917030839883?text=${encodeURIComponent("Hello, I'm interested in the Business App plan (₹40,000). Please share next steps.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full">Contact via WhatsApp</Button>
                </a>
              </Card>

              <Card className="p-6 glass-card">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Advanced App</h3>
                    <p className="text-foreground/70 text-sm">Native apps for enterprise needs</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">₹80,000</div>
                    <div className="text-sm text-foreground/70">One-time payment</div>
                  </div>
                </div>

                <ul className="mb-4 list-disc list-inside text-foreground/80 space-y-2">
                  <li>Native Android & iOS Apps</li>
                  <li>Advanced Dashboard</li>
                  <li>Payment Gateway Integration</li>
                  <li>App Store Publishing</li>
                  <li>1 Year Premium Support</li>
                </ul>
                <a
                  href={`https://wa.me/917030839883?text=${encodeURIComponent("Hello, I'm interested in the Advanced App plan (₹80,000). Please share next steps.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full">Contact via WhatsApp</Button>
                </a>
              </Card>
            </div>
          </div>

          {/* Enterprise & Additional services */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 glass-card">
              <h3 className="text-xl font-semibold mb-3">Enterprise Solutions</h3>
              <p className="text-foreground/70 mb-3">Enterprise All-in-One — Complete digital transformation package</p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mb-4">
                <li>Custom Quote for Website + App</li>
                <li>Digital Marketing Campaigns & Social Media Management</li>
                <li>Advanced SEO Strategy</li>
                <li>Dedicated Account Manager & Priority 24/7 Support</li>
                <li>Monthly Performance Reports</li>
              </ul>
              <a
                href={`https://wa.me/917030839883?text=${encodeURIComponent("Hello, I'm interested in an Enterprise All-in-One custom quote. Please get in touch.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full">Request Custom Quote</Button>
              </a>
            </Card>

            <Card className="p-6 glass-card">
              <h3 className="text-xl font-semibold mb-3">Additional Services</h3>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mb-4">
                <li>Business Advertisement — Starting at ₹6,000</li>
                <li>Social Media Management — Starting at ₹2,000</li>
                <li>SEO Growth — Starting at ₹2,000</li>
                <li>NFC Digital Business Card — Starting at ₹3,000</li>
              </ul>
              <a
                href={`https://wa.me/917030839883?text=${encodeURIComponent("Hello, I want to enquire about additional services. Please connect.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full">Enquire via WhatsApp</Button>
              </a>
            </Card>
          </div>

          {/* Services Details Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 glass-card">
                <div className="flex items-start gap-3 mb-3">
                  <Zap className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Business Advertisement</h3>
                    <p className="text-foreground/70">Convert Clicks into Customers. Our advertising strategies are built for ROI with campaigns that reach and motivate your audience and more.</p>
                  </div>
                </div>
                <div className="mb-3">
                  <h4 className="font-semibold">What We Deliver:</h4>
                  <ul className="list-disc list-inside text-foreground/80 space-y-1">
                    <li>Targeted campaigns across platforms</li>
                    <li>Ad creation optimized for conversion</li>
                    <li>Budget-driven media planning</li>
                    <li>Performance tracking and more</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Results You Can Expect:</h4>
                  <ul className="list-disc list-inside text-foreground/80 space-y-1">
                    <li>Average 3.5x ROI on ad spend</li>
                    <li>25% lower customer acquisition cost</li>
                    <li>Real-time campaign adjustments</li>
                  </ul>
                </div>
                <a href={`https://wa.me/917030839883?text=${encodeURIComponent("Hello, I'm interested in Business Advertisement services. Please share options and pricing.")}`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Enquire via WhatsApp</Button>
                </a>
              </Card>

              <Card className="p-6 glass-card">
                <div className="flex items-start gap-3 mb-3">
                  <Smartphone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Social Media Management</h3>
                    <p className="text-foreground/70">Build Your Brand, One Post at a Time. Forge stronger connections through curated, strategic social media content and engagement and more.</p>
                  </div>
                </div>
                <div className="mb-3">
                  <h4 className="font-semibold">What We Deliver:</h4>
                  <ul className="list-disc list-inside text-foreground/80 space-y-1">
                    <li>Campaign strategy and content calendars</li>
                    <li>Creative visuals and captions</li>
                    <li>Community engagement</li>
                    <li>Analytics-driven growth planning and more</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Results You Can Expect:</h4>
                  <ul className="list-disc list-inside text-foreground/80 space-y-1">
                    <li>45% average engagement increase</li>
                    <li>2x faster audience growth</li>
                    <li>Dedicated community manager</li>
                  </ul>
                </div>
                <a href={`https://wa.me/917030839883?text=${encodeURIComponent("Hello, I'm interested in Social Media Management services. Please share packages.")}`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Enquire via WhatsApp</Button>
                </a>
              </Card>

              <Card className="p-6 glass-card">
                <div className="flex items-start gap-3 mb-3">
                  <Globe className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">SEO Services</h3>
                    <p className="text-foreground/70">Be Found Where It Matters. Our SEO delivers sustainable organic visibility with clear, measurable progress through white-hat techniques and more.</p>
                  </div>
                </div>
                <div className="mb-3">
                  <h4 className="font-semibold">What We Deliver:</h4>
                  <ul className="list-disc list-inside text-foreground/80 space-y-1">
                    <li>In-depth keyword research</li>
                    <li>On-page and technical optimization</li>
                    <li>Off-page strategies and outreach</li>
                    <li>Monthly performance reports and more</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Results You Can Expect:</h4>
                  <ul className="list-disc list-inside text-foreground/80 space-y-1">
                    <li>Average 60% organic traffic increase</li>
                    <li>First-page rankings for 15+ keywords</li>
                    <li>Comprehensive monthly reporting</li>
                  </ul>
                </div>
                <a href={`https://wa.me/917030839883?text=${encodeURIComponent("Hello, I'm interested in SEO Services. Please share scope and pricing.")}`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Enquire via WhatsApp</Button>
                </a>
              </Card>

              <Card className="p-6 glass-card">
                <div className="flex items-start gap-3 mb-3">
                  <Gift className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Business Card Design</h3>
                    <p className="text-foreground/70">Make a Strong First Impression. We design premium, modern, and brand-focused business cards that reflect your identity and professionalism.</p>
                  </div>
                </div>
                <div className="mb-3">
                  <h4 className="font-semibold">What We Deliver:</h4>
                  <ul className="list-disc list-inside text-foreground/80 space-y-1">
                    <li>Custom designs aligned with your brand identity</li>
                    <li>Minimal, modern, or luxury-style layouts</li>
                    <li>High-resolution print-ready files (CMYK)</li>
                    <li>Double-sided and QR-based digital card options</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Results You Can Expect:</h4>
                  <ul className="list-disc list-inside text-foreground/80 space-y-1">
                    <li>Unique brand-first identity</li>
                    <li>Print-ready files for any printing vendor</li>
                    <li>Digital version optimized for mobile sharing</li>
                  </ul>
                </div>
                <a href={`https://wa.me/917030839883?text=${encodeURIComponent("Hello, I'm interested in Business Card Design. Please share design options and pricing.")}`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Enquire via WhatsApp</Button>
                </a>
              </Card>
            </div>
          </div>

          {/* FAQ & CTA */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <Card className="p-6 glass-card">
              <div className="space-y-4 text-foreground/80">
                <div>
                  <h4 className="font-semibold">Do you offer custom plans?</h4>
                  <p>Yes — Mix and match services, scale as you grow, and work with our experts for a tailored solution.</p>
                </div>
                <div>
                  <h4 className="font-semibold">What payment methods do you accept?</h4>
                  <p>We accept bank transfers, UPI, and popular payment gateways depending on the package.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Do you provide maintenance?</h4>
                  <p>All plans include 1 year of support; maintenance packages can be extended for ongoing updates.</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mb-20">
            <h3 className="text-xl font-semibold mb-3">Ready to launch your next big idea?</h3>
            <p className="text-foreground/70 mb-6">Let's discuss your ideas and create something amazing together. We're just a message away.</p>
            <a
              href={`https://wa.me/917030839883?text=${encodeURIComponent("Hi, I'd like to discuss a project. Please connect.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="px-8 py-3">Contact via WhatsApp</Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;

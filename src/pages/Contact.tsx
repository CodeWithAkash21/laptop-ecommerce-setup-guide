
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send
} from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be replaced with actual form submission logic
    console.log('Contact form submitted');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container py-16 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <Separator className="mb-8" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our products or need assistance with your order? 
                  Our team is here to help. Reach out to us through any of the channels below.
                </p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <MapPin className="h-6 w-6 mr-4 text-primary" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <address className="text-muted-foreground not-italic">
                        123 Gaming Street<br />
                        Tech Hub, CA 94043<br />
                        United States
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Phone className="h-6 w-6 mr-4 text-primary" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Mail className="h-6 w-6 mr-4 text-primary" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">support@gamingtech.example</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Clock className="h-6 w-6 mr-4 text-primary" />
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9AM - 6PM<br />
                        Saturday: 10AM - 4PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Type your message here..." 
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full md:w-auto gap-2">
                    Send Message
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

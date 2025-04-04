
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ContactInfo {
  icon: JSX.Element;
  title: string;
  content: string;
  link?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const contactInfo: ContactInfo[] = [
    {
      icon: <MapPin size={20} />,
      title: "Location",
      content: "Nasr City, Cairo, Egypt"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      content: "+20 101 044 7361",
      link: "tel:+201010447361"
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      content: "menna15sadek@gmail.com",
      link: "mailto:menna15sadek@gmail.com"
    },
    {
      icon: <Globe size={20} />,
      title: "GitHub",
      content: "github.com/MennaTuallahmohamed",
      link: "https://github.com/MennaTuallahmohamed"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thanks for contacting me! I'll get back to you soon.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h4 className="section-subtitle">Get in Touch</h4>
          <h2 className="section-title">Any Questions? Feel Free to Contact</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-brand-primary shrink-0">
                    {info.icon}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-gray-600 hover:text-brand-primary transition-colors"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center hover:bg-purple-800 transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                
                <a 
                  href="https://github.com/MennaTuallahmohamed" 
                  className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-900 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:bg-[#005885] transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="w-full primary-button py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

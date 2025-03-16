import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsSubmitting(true);
      
      // Send data to the backend API
      await apiRequest('POST', '/api/contact', data);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-phone-alt",
      title: "Phone",
      value: "01723310266",
      link: "tel:01723310266"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "mehedi23ru@gmail.com",
      link: "mailto:mehedi23ru@gmail.com"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Address",
      value: "Village – Swarupdaha, Post – Poradaha, PS – Mirpur, District – Kushtia, Post Code: 7031",
      link: null
    }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", color: "bg-blue-600 hover:bg-blue-700", ariaLabel: "Facebook" },
    { icon: "fab fa-twitter", color: "bg-blue-400 hover:bg-blue-500", ariaLabel: "Twitter" },
    { icon: "fab fa-linkedin-in", color: "bg-blue-700 hover:bg-blue-800", ariaLabel: "LinkedIn" },
    { icon: "fab fa-instagram", color: "bg-red-600 hover:bg-red-700", ariaLabel: "Instagram" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] text-primary">Contact Me</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-4 mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            I'd love to hear from you. Feel free to reach out through any of the following channels.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold font-['Inter'] text-primary mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className={`${info.icon} text-primary`}></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{info.title}</h4>
                      <p className="text-gray-600">
                        {info.link ? (
                          <a href={info.link} className="hover:text-primary">{info.value}</a>
                        ) : (
                          info.value
                        )}
                      </p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4">
                  <h4 className="font-medium mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index} 
                        href="#" 
                        className={`w-10 h-10 ${social.color} text-white rounded-full flex items-center justify-center transition`} 
                        aria-label={social.ariaLabel}
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold font-['Inter'] text-primary mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      {...register('name')}
                      placeholder="John Doe" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      {...register('email')}
                      placeholder="john@example.com" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    {...register('subject')}
                    placeholder="How can I help you?" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    {...register('message')}
                    rows={5} 
                    placeholder="Your message here..." 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-blue-900 transition font-medium disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

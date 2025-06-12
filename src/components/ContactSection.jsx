import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="flex items-center justify-center">
          <div className="space-y-2">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <a
                href="mailto:sharmaamohit121@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                sharmaamohit121@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <a
                href="tel:+919171200132"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91-9171200132
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <span className="text-muted-foreground hover:text-primary transition-colors">
                Guna, Madhya Pradesh (India)
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <h4 className="font-medium mb-4">Connect With Me</h4>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/mohit-sharma-864815252/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

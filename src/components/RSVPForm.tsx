
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

const RSVPForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    plusOne: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      plusOne: checked,
    }));
  };

  const sendNotificationEmail = async (data: typeof formData) => {
    try {
      // Use EmailJS service to send the notification email
      // Create a minimal no-CORS fetch request to a public email forwarder
      const response = await fetch("https://formsubmit.co/shaqgotplowed@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          plusOne: data.plusOne ? "Yes" : "No",
          _subject: `New RSVP from ${data.name} for Coming Out Celebration`,
        }),
        mode: "no-cors",
      });
      
      console.log("Email notification sent", response);
      return true;
    } catch (error) {
      console.error("Error sending notification:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send notification email
      await sendNotificationEmail(formData);
      
      // Show success message
      toast({
        title: "RSVP Submitted!",
        description: "Thank you for your RSVP. We'll be in touch soon!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        plusOne: false,
      });
    } catch (error) {
      console.error("RSVP submission error:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your RSVP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-party-pink/30 focus:border-party-pink focus:ring-party-pink"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="border-party-pink/30 focus:border-party-pink focus:ring-party-pink"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleChange}
          className="border-party-pink/30 focus:border-party-pink focus:ring-party-pink"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (Optional)</Label>
        <textarea
          id="message"
          name="message"
          placeholder="Any special message or dietary requirements?"
          value={formData.message}
          onChange={handleChange}
          className="w-full min-h-[100px] p-3 rounded-md border border-party-pink/30 focus:outline-none focus:border-party-pink focus:ring-1 focus:ring-party-pink"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="plusOne"
          checked={formData.plusOne}
          onCheckedChange={handleCheckboxChange}
        />
        <Label htmlFor="plusOne" className="cursor-pointer">I'll be bringing a plus one</Label>
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-party-pink hover:bg-party-pink/90 text-white"
      >
        {isSubmitting ? "Submitting..." : "Submit RSVP"}
      </Button>
    </form>
  );
};

export default RSVPForm;

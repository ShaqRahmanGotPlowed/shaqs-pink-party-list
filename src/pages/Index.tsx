
import React from "react";
import Header from "@/components/Header";
import RSVPForm from "@/components/RSVPForm";
import CountdownTimer from "@/components/CountdownTimer";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPin, Clock, PartyPopper } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  // Set the event date to 30 days from now
  const eventDate = new Date();
  eventDate.setDate(eventDate.getDate() + 30);

  return (
    <div className="min-h-screen bg-white confetti-bg">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        {/* Hero Section */}
        <section className="relative px-6 py-12 md:py-20 flex flex-col items-center text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="font-dancing gradient-text animate-pulse-light">Shaq's</span>
              <br />
              <span className="text-party-black">Coming Out Celebration</span>
            </h1>
            <p className="text-lg md:text-xl text-party-black/80 max-w-2xl mx-auto mt-4">
              Join me for a special celebration as I share my authentic self with friends and family.
              Your presence would mean the world to me!
            </p>
          </div>
          
          <div className="w-full max-w-2xl mx-auto">
            <img 
              src="/lovable-uploads/9cc0ebb7-5af5-454d-a55c-11a684d7836c.png" 
              alt="Shaq Rahman" 
              className="w-full max-w-md mx-auto rounded-lg shadow-xl mb-8 border-4 border-party-pink"
            />
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-dancing gradient-text mb-6">Counting down to the celebration!</h2>
            <CountdownTimer targetDate={eventDate} />
          </div>
        </section>
        
        <Separator className="my-8 bg-party-pink/20" />
        
        {/* About Section */}
        <section id="about" className="px-6 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-party-black">About The Celebration</h2>
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-party-pink/20">
              <p className="text-lg text-party-black/90 mb-6">
                This celebration marks an important milestone in my life as I embrace my authentic self. 
                After years of self-discovery, I'm excited to share this journey with the people who 
                mean the most to me.
              </p>
              <p className="text-lg text-party-black/90 mb-6">
                The evening will be filled with good food, great music, heartfelt conversations, 
                and, most importantly, love and acceptance. I can't wait to celebrate this new 
                chapter with all of you!
              </p>
              <p className="text-lg font-medium text-party-pink">
                Your support means everything to me! ❤️
              </p>
            </div>
          </div>
        </section>
        
        <Separator className="my-8 bg-party-pink/20" />
        
        {/* RSVP Section */}
        <section id="rsvp" className="px-6 py-12 md:py-16 bg-gradient-to-b from-white to-party-pink/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-party-black">RSVP</h2>
            <p className="text-lg text-party-black/80 mb-8 max-w-lg mx-auto">
              Please let me know if you'll be able to join the celebration by filling out the form below.
            </p>
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-party-pink/20">
              <RSVPForm />
            </div>
          </div>
        </section>
        
        <Separator className="my-8 bg-party-pink/20" />
        
        {/* Event Details Section */}
        <section id="details" className="px-6 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-party-black">Event Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-party-pink/20 flex flex-col items-center">
                <CalendarDays className="w-10 h-10 text-party-pink mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-party-black">Date</h3>
                <p className="text-party-black/80">
                  {eventDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-party-pink/20 flex flex-col items-center">
                <Clock className="w-10 h-10 text-party-pink mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-party-black">Time</h3>
                <p className="text-party-black/80">7:00 PM - 11:00 PM</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-party-pink/20 flex flex-col items-center md:col-span-2">
                <MapPin className="w-10 h-10 text-party-pink mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-party-black">Location</h3>
                <p className="text-party-black/80">The Pink Celebration Venue</p>
                <p className="text-party-black/80">123 Rainbow Street, Celebration City</p>
              </div>
            </div>
            
            <div className="mt-10 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-party-pink/20">
              <div className="flex justify-center mb-4">
                <PartyPopper className="w-10 h-10 text-party-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-party-black">What to Expect</h3>
              <ul className="text-left space-y-2 max-w-md mx-auto">
                <li className="flex items-start">
                  <span className="text-party-pink mr-2">•</span>
                  <span className="text-party-black/80">Welcome drinks and appetizers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-party-pink mr-2">•</span>
                  <span className="text-party-black/80">A special announcement and toast</span>
                </li>
                <li className="flex items-start">
                  <span className="text-party-pink mr-2">•</span>
                  <span className="text-party-black/80">Dinner buffet with various options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-party-pink mr-2">•</span>
                  <span className="text-party-black/80">Music and dancing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-party-pink mr-2">•</span>
                  <span className="text-party-black/80">Photo booth with fun props</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="px-6 py-8 text-center border-t border-party-pink/20 mt-12">
          <p className="text-party-black/70 text-sm">
            © {new Date().getFullYear()} Shaq Rahman's Coming Out Celebration
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

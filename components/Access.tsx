import React from 'react';
import { SectionId } from '../types';
import { MapPin, Phone, Clock, Instagram, ExternalLink } from 'lucide-react';

const Access: React.FC = () => {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=東京都港区南青山3-1-1";

  return (
    <section id={SectionId.ACCESS} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row bg-primary rounded-3xl overflow-hidden shadow-sm">
            {/* Info */}
            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <span className="font-cursive text-3xl text-accent mb-2">Salon Info</span>
                <h2 className="text-2xl font-serif text-text mb-10">Access</h2>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-accent mt-1" />
                        <div>
                            <p className="font-medium text-text text-lg">Nail Salon Mimi</p>
                            <p className="text-text/70 mt-1">
                                〒107-0062<br/>
                                東京都港区南青山3-1-1<br/>
                                ミミビル 3F
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-accent" />
                        <p className="text-text font-serif text-xl font-bold">03-1234-5678</p>
                    </div>

                    <div className="flex items-start gap-4">
                        <Clock className="w-5 h-5 text-accent mt-1" />
                        <div>
                            <p className="text-text/80">Open: 10:00 - 21:00</p>
                            <p className="text-text/60 text-sm">定休日: 不定休</p>
                        </div>
                    </div>
                    
                    <div className="pt-4 flex flex-wrap gap-4">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text hover:text-accent transition-colors group text-sm font-medium bg-white px-4 py-2 rounded-full border border-secondary/30 hover:border-accent">
                            <Instagram className="w-4 h-4" />
                            <span>@nail_salon_mimi</span>
                        </a>
                         <a href={mapUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text hover:text-accent transition-colors group text-sm font-medium bg-white px-4 py-2 rounded-full border border-secondary/30 hover:border-accent">
                            <MapPin className="w-4 h-4" />
                            <span>Google Mapで開く</span>
                            <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Google Map */}
            <div className="w-full md:w-1/2 h-[300px] md:h-auto bg-gray-200 relative min-h-[400px]">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747798547432!2d139.7147723767743!3d35.6685518725916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9fa9c5950b%3A0x6629737920399436!2z44CSMTA3LTAwNjIg5p2x5Lqs6YO95riv5Yy65Y2X6Z2S5bGx77yT5LiB55uu77yR4oiS77yR!5e0!3m2!1sja!2sjp!4v1710000000000!5m2!1sja!2sjp" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Access;
import {
  Users,
  Globe,
  Award,
  Calendar,
  ArrowRight,
  ExternalLink,
  DollarSign,
  Music,
} from "lucide-react";
import { useState, useEffect } from "react";
import logo from "./ElevatEd.png";
import backgroundd from "./EASIMG.png";
import UNGADISEC from "./2.png";
import AIPPM from "./6.png";
import UNW from "./5.png";
import UNHRC from "./3.png";
import UEFA from "./4.png";
import IPC from "./1.png";

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    // Set target date for MUN event - November 7th, 2025
    const targetDate = new Date("December 15, 2025 09:00:00");

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white bg-opacity-90 backdrop-blur-sm fixed top-0 w-full z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#2d3a69] to-[#e41e34] bg-clip-text text-transparent">
                Excelsior American School
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-900 hover:text-[#e41e34] transition-colors font-semibold"
              >
                About
              </a>
              <a
                href="#committees"
                className="text-gray-900 hover:text-[#e41e34] transition-colors font-semibold"
              >
                Committees
              </a>
              <a
                href="#register"
                className="text-gray-900 hover:text-[#e41e34] transition-colors font-semibold"
              >
                Register
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center before:absolute before:inset-0 before:bg-white/75"
        style={{ backgroundImage: `url(${backgroundd})` }}
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <span className="bg-[#e41e34] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              Important: Registrations Open
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#2d3a69] via-[#e41e34] to-[#2d3a69] bg-clip-text text-transparent">
            EXCELSIOR MUN
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            The Future Chapter 2025
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            | December 15th & 16th 2025
          </p>
          <a href="#register"><button className="bg-gradient-to-r from-[#e41e34] to-[#2d3a69] hover:from-[#d41830] hover:to-[#253056] text-white px-12 py-4 rounded-lg font-bold text-xl transition-all transform hover:scale-105 flex items-center justify-center mx-auto shadow-lg">
            REGISTER NOW
            <ArrowRight className="ml-3 h-6 w-6" />
          </button></a>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-900 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-900 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-900 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section
        id="committees"
        className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#2d3a69] to-[#e41e34] bg-clip-text text-transparent">
              Committees
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 shadow-lg">
              <div className="w-full h-100 bg-[#2d3a69] rounded-lg mb-6 flex items-center justify-center">
                <img
                  src={UNGADISEC}
                  alt="UNGA"
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                UNGA: ECOFIN
              </h3>
              <p className="text-gray-600 text-sm">
                Use of Digitalisation to ensure Sustainable Economic growth:
                Balancing Innovation and Inclusive Development
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 shadow-lg">
              <div className="w-full h-100 bg-[#2d3a69] rounded-lg mb-6 flex items-center justify-center">
                <img
                  src={AIPPM}
                  alt="UNGA"
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AIPPM</h3>
              <p className="text-gray-600 text-sm">
                Discussing the Demand for a Nationwide Caste Census and Its
                Implications on Reservation Policies
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 shadow-lg">
              <div className="w-full h-100 bg-[#2d3a69] rounded-lg mb-6 flex items-center justify-center">
                <img
                  src={UNW}
                  alt="UNGA"
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                UN Women
              </h3>
              <p className="text-gray-600 text-sm">
                Ensuring Access to Safe and Legal Abortion Services as a
                Fundamental Aspect of Women's Healthcare and Rights
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 shadow-lg">
              <div className="w-full h-100 bg-[#2d3a69] rounded-lg mb-6 flex items-center justify-center">
                <img
                  src={UNHRC}
                  alt="UNGA"
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">UNHRC</h3>
              <p className="text-gray-600 text-sm">
                Examining the human rights implications of military occupations
                and territorial disputes, with a focus on ensuring civilian
                protection and compliance with international law
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 shadow-lg">
              <div className="w-full h-100 bg-[#2d3a69] rounded-lg mb-6 flex items-center justify-center">
                <img
                  src={UEFA}
                  alt="UNGA"
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">UEFA</h3>
              <p className="text-gray-600 text-sm">
                Evaluating the effectiveness of financial fair play regulations
                in maintaining competitive balance and integrity among clubs,
                while addressing potential reform needs
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 shadow-lg">
              <div className="w-full h-100 bg-[#2d3a69] rounded-lg mb-6 flex items-center justify-center">
                <img
                  src={IPC}
                  alt="UNGA"
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                International Press
              </h3>
              <p className="text-gray-600 text-sm">
                International Press Conference - No Agenda. Journalists,
                Photographers, and Media Representatives covering the conference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-gradient-to-r from-[#e41e34] to-[#2d3a69]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            COMING THIS DECEMBER
          </h2>
          <p className="text-xl text-gray-200 mb-12">
            Biggest and Finest Conference, Join us on 15th & 16th December 2025
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-20 p-6 rounded-xl border border-white border-opacity-30">
              <div className="text-4xl font-bold text-white mb-2">
                {timeLeft.days}
              </div>
              <div className="text-gray-200 uppercase tracking-wide">Days</div>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl border border-white border-opacity-30">
              <div className="text-4xl font-bold text-white mb-2">
                {timeLeft.hours}
              </div>
              <div className="text-gray-200 uppercase tracking-wide">Hours</div>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl border border-white border-opacity-30">
              <div className="text-4xl font-bold text-white mb-2">
                {timeLeft.minutes}
              </div>
              <div className="text-gray-200 uppercase tracking-wide">
                Minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#2d3a69] to-[#e41e34] bg-clip-text text-transparent">
              About Excelsior MUN 2025
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Get ready for the most exciting MUN experience! Two days packed
              with engaging committees, professional training, amazing prizes,
              and unforgettable social events.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                What Makes Us Special?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#e41e34] to-[#2d3a69] rounded-full p-3 mr-4 mt-1 flex-shrink-0">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Pre-Conference Training
                    </h4>
                    <span className="text-gray-700">
                      Join us on for <b>comprehensive MUN training sessions</b> led by experienced
                      chairs and advisors.
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#e41e34] to-[#2d3a69] rounded-full p-3 mr-4 mt-1 flex-shrink-0">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      6 Dynamic Committees
                    </h4>
                    <span className="text-gray-700">
                      Experience diverse and engaging committees covering global
                      issues from economics to human rights, sports governance,
                      and specialized crisis scenarios.
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#e41e34] to-[#2d3a69] rounded-full p-3 mr-4 mt-1 flex-shrink-0">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Cash Prize & Recognition
                    </h4>
                    <span className="text-gray-700">
                      Compete for the{" "}
                      <strong>Best School Delegation Cash Prize</strong> and
                      receive certificates of participation for all delegates.
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#e41e34] to-[#2d3a69] rounded-full p-3 mr-4 mt-1 flex-shrink-0">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Epic DJ Night Social Event
                    </h4>
                    <span className="text-gray-700">
                      Unwind and connect with fellow delegates at our exclusive
                      DJ Night - the perfect blend of networking and
                      entertainment!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Conference Highlights
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#2d3a69] to-[#1e2647] rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Cash Prize
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Best School Delegation
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#e41e34] to-[#c11829] rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#e41e34] mb-1">
                    DJ Night
                  </h4>
                  <p className="text-gray-600 text-sm">Social Event</p>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#2d3a69] to-[#1e2647] rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">6</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Committees
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Diverse & Engaging Topics
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#e41e34] to-[#c11829] rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">2</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#e41e34] mb-1">
                    Days
                  </h4>
                  <p className="text-gray-600 text-sm">Intensive Conference</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-5 w-5 text-[#e41e34] mr-2" />
                  <span className="font-semibold text-gray-900">
                    Certificates for All
                  </span>
                </div>
                <p className="text-center text-gray-600 text-sm">
                  Every participant receives an official certificate of
                  participation
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#2d3a69] to-[#e41e34] rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Conference Timeline</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-2">Pre-Conference </h4>
                <p className="text-gray-100">Training Session</p>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-2">December 15th-16th</h4>
                <p className="text-gray-100">Main Conference Days</p>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-2">Evening Event</h4>
                <p className="text-gray-100">DJ Night Social</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section
        id="register"
        className="py-20 bg-gray-50 border-t border-gray-200"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#2d3a69] to-[#e41e34] bg-clip-text text-transparent">
              Register Now
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Ready to be part of the biggest MUN conference of 2025? Register
              today and secure your spot!
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-12 rounded-2xl border border-gray-200 shadow-xl">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Join Excelsior MUN 2025
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                Experience world-class diplomacy, debate, and leadership
                development. Don't miss out on this incredible opportunity!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-600 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-[#e41e34]" />
                  <span>December 15th & 816th, 2025</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-[#2d3a69]" />
                  <span>6 Committees Available</span>
                </div>
              </div>
            </div>

            <a
              href="https://linktr.ee/EASMUN2025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#e41e34] to-[#2d3a69] hover:from-[#d41830] hover:to-[#253056] text-white px-12 py-4 rounded-lg font-bold text-xl transition-all transform hover:scale-105 shadow-lg"
            >
              Register on LinkTree
              <ExternalLink className="ml-3 h-6 w-6" />
            </a>

            <p className="text-gray-600 text-sm mt-6">
              Click the link above to access all registration details.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#2d3a69] to-[#e41e34] bg-clip-text text-transparent">
                Excelsior American School
              </h3>
              <p className="text-gray-600 mb-4">
                Self-Inspired Learning
              </p>
              <div className="flex items-center">
                <span className="text-gray-500 text-sm mr-2">
                  Model United Nations
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="#about"
                    className="hover:text-[#e41e34] transition-colors"
                  >
                    About MUN
                  </a>
                </li>
                <li>
                  <a
                    href="#committees"
                    className="hover:text-[#e41e34] transition-colors"
                  >
                    Committees
                  </a>
                </li>
                <li>
                  <a
                    href="#register"
                    className="hover:text-[#e41e34] transition-colors"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Follow Us
              </h3>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest MUN activities and achievements.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gradient-to-r from-[#e41e34] to-[#2d3a69] rounded-full p-3 hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="bg-gradient-to-r from-[#2d3a69] to-[#e41e34] rounded-full p-3 hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="bg-gradient-to-r from-[#e41e34] to-[#2d3a69] rounded-full p-3 hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>
              &copy; 2025 Excelsior American School. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

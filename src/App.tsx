
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Promotions from "./pages/Promotions";
import Delivery from "./pages/Delivery";
import Catering from "./pages/Catering";
import Events from "./pages/Events";
import GiftCards from "./pages/GiftCards";
import Loyalty from "./pages/Loyalty";
import Nutrition from "./pages/Nutrition";
import Franchise from "./pages/Franchise";
import Careers from "./pages/Careers";
import Reviews from "./pages/Reviews";
import News from "./pages/News";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./contexts/CartContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/promotions" element={<Promotions />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/catering" element={<Catering />} />
                <Route path="/events" element={<Events />} />
                <Route path="/gift-cards" element={<GiftCards />} />
                <Route path="/loyalty" element={<Loyalty />} />
                <Route path="/nutrition" element={<Nutrition />} />
                <Route path="/franchise" element={<Franchise />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/news" element={<News />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;

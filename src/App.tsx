import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhatsappWidget from "@/components/WhatsappWidget";
import ReactGA from "react-ga4";
import { usePageTracking } from "@/hooks/use-page-tracking";

const queryClient = new QueryClient();

ReactGA.initialize(import.meta.env.VITE_GA4_ID);

const RouterTracker = () => {
  usePageTracking();
  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <RouterTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        <WhatsappWidget />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

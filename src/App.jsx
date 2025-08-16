import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ScriptsSymbolsSoftPower from "./pages/editions/ScriptsSymbolsSoftPower";
import ScrollToTop from "./components/ScrollToTop";
import TopNavbar from './components/TopNavbar';
import { useLocation } from 'react-router-dom';
import DashboardLayout from "./layouts/DashboardLayout";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import EditorDashboard from "./pages/dashboards/EditorDashboard";
import ReviewerDashboard from "./pages/dashboards/ReviewerDashboard";
import AuthorDashboard from "./pages/dashboards/AuthorDashboard";
import ReaderDashboard from "./pages/dashboards/ReaderDashboard";
import BlogPage from "./pages/BlogPage";
import PublisherPage from "./pages/PublisherPage";
import IssnPage from "./pages/IssnPage";
import ContactPage from "./pages/ContactPage";
import ResearchPage from "./pages/ResearchPage";
import LandingPage from "./pages/LandingPage";
import Ethics from "./pages/Ethics";
import Plagiarism from "./pages/Plagiarism";
import ContactUs from "./pages/ContactUs";
import EditorialBoard from "./pages/EditorialBoard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import WriteContent from "./pages/WriteContent";
import EditionsPage from "./pages/EditionsPage";
import AdminArticles from "./pages/admin/AdminArticles";
import AdminEditions from "./pages/admin/AdminEditions";
import AuthorArticles from "./pages/author/AuthorArticles";
import EditorArticles from "./pages/editor/EditorArticles";
import EditorReviews from "./pages/editor/EditorReviews";
import ReviewerReviews from "./pages/reviewer/ReviewerReviews";
import ReaderArticles from "./pages/reader/ReaderArticles";
import ArticlePage from "./pages/ArticlePage";
import "./App.css";
import BridgingLiteracyGapsInIndia from "./pages/editions/BridgingLiteracyGapsInIndia";
import GreenwashingInCorporateBranding from "./pages/editions/GreenwashingInCorporateBranding";
import PrimaryHealthCareAndForeignPolicy from "./pages/editions/PrimaryHealthCareAndForeignPolicy";
import LifeCycleEnvironmentalImpactAssessment from "./pages/editions/LifeCycleEnvironmentalImpactAssessment";
import TheTroublingRiseOfRealismOverInstitutionalism from "./pages/editions/TheTroublingRiseOfRealismOverInstitutionalism";
import ImpactOfTheMaternityBenefitAct from "./pages/editions/ImpactOfTheMaternityBenefitAct";
import ProjectingCultureShapingPerceptions from "./pages/editions/ProjectingCultureShapingPerceptions";
import TheIntersectionOfWomenEmpowerment from "./pages/editions/TheIntersectionOfWomenEmpowerment";
import SovereigntyStrategyAndSystemicStrain from "./pages/editions/SovereigntyStrategyAndSystemicStrain";
import EvaluatingPolicyGapsAndYouthInvolvement from "./pages/editions/EvaluatingPolicyGapsAndYouthInvolvement";
import MultipolarWorldmaking from "./pages/editions/MultipolarWorldmaking";
import BridgingTheEducationGap from "./pages/editions/BridgingTheEducationGap";
import IndiaUSBilateralRelations from "./pages/editions/IndiaUSBilateralRelations";
import DiplomacyBeyondDiplomats from "./pages/editions/DiplomacyBeyondDiplomats";
import FromGramSabhaToEcoSwaraj from "./pages/editions/FromGramSabhaToEcoSwaraj";
import ImpactOfSocialProtectionPolicies from "./pages/editions/ImpactOfSocialProtectionPolicies";
import RewiringTheEnginesOfGrowth from "./pages/editions/RewiringTheEnginesOfGrowth";
import ReconcilingDevelopmentAndEcology from "./pages/editions/ReconcilingDevelopmentAndEcology";
import GeopoliticalStressImpactingFinancialMarketsInIndia from "./pages/editions/GeopoliticalStressImpactingFinancialMarketsInIndia";
import TheInformalGigEconomyInGlobalisedIndia from "./pages/editions/TheInformalGigEconomyInGlobalisedIndia";
import UnderstandingTheMindInDecline from "./pages/editions/UnderstandingTheMindInDecline";
import BeyondFirewalls from "./pages/editions/BeyondFirewalls";
import Economics from "./pages/editions/Economics";
import MahatmaGandhiRural from "./pages/editions/MahatmaGandhiRural";
import IndiaApproachCrisis from "./pages/editions/IndiaApproachCrisis";
import FromPassivePlayer from "./pages/editions/FromPassivePlayer";
import IndiaPolicyPromote from "./pages/editions/IndiaPolicyPromote";
import ImpactAnalysis from "./pages/editions/ImpactAnalysis";
import FromTraditional from "./pages/editions/FromTraditional";
import SmokeSludge from "./pages/editions/SmokeSludge";
import WhoDeserveToBe from "./pages/editions/WhoDeserveToBe";
import FilteredIssuePage from "./pages/issues/FilteredIssuePage";
import BridgingTheDivide from "./pages/editions/BridgingTheDivide";
import LocalizingClimateAction from "./pages/editions/LocalizingClimateAction";
import ImpactOfTrump from "./pages/editions/ImpactOfTrump";
import FromPaperToPractice from "./pages/editions/FromPaperToPractice";
import AdvancingUrban from "./pages/editions/AdvancingUrban";
import RelationshipBetweenIdentity from "./pages/editions/RelationshipBetweenIdentity";
import FromHegemonytoHumanitarianism from "./pages/editions/FromHegemonytoHumanitarianism";
import FiscalRisk from "./pages/editions/FiscalRisk";
import FromPolicyToProgress from "./pages/editions/FromPolicyToProgress";




function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      {location.pathname !== "/" && <TopNavbar />}

      <Routes>
        <Route
          path="/admin"
          element={
            <DashboardLayout role="admin">
              <AdminDashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/editor"
          element={
            <DashboardLayout role="editor">
              <EditorDashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/reviewer"
          element={
            <DashboardLayout role="reviewer">
              <ReviewerDashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/author"
          element={
            <DashboardLayout role="author">
              <AuthorDashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/reader"
          element={
            <DashboardLayout role="reader">
              <ReaderDashboard />
            </DashboardLayout>
          }
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/publisher" element={<PublisherPage />} />
        <Route path="/issn" element={<IssnPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/editions" element={<EditionsPage />} />
        <Route path="/editions/:issueId" element={<FilteredIssuePage />} />
        <Route path="/ethics" element={<Ethics />} />
        <Route path="/plagiarism" element={<Plagiarism />} />
        <Route path="/editorial-board" element={<EditorialBoard />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/write" element={<WriteContent />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/articles" element={<AdminArticles />} />
        <Route path="/admin/editions" element={<AdminEditions />} />
        <Route path="/author/articles" element={<AuthorArticles />} />
        <Route path="/editor/articles" element={<EditorArticles />} />
        <Route path="/editor/reviews" element={<EditorReviews />} />
        <Route path="/reviewer/reviews" element={<ReviewerReviews />} />
        <Route path="/reader/articles" element={<ReaderArticles />} />
        <Route path="/article/:articleSlug" element={<ArticlePage />} />
        <Route
          path="/Bridging-Literacy-Gaps-in-India"
          element={<BridgingLiteracyGapsInIndia />}
        />
        <Route
          path="/Greenwashing-In-Corporate-Branding"
          element={<GreenwashingInCorporateBranding />}
        />
        <Route
          path="/Primary-Health-Care-And-Foreign-Policy"
          element={<PrimaryHealthCareAndForeignPolicy />}
        />
        <Route
          path="/Life-Cycle-Environmental-Impact-Assessment"
          element={<LifeCycleEnvironmentalImpactAssessment />}
        />
        <Route
          path="/The-Troubling-Rise-Of-Realism-Over-Institutionalism"
          element={<TheTroublingRiseOfRealismOverInstitutionalism />}
        />
        <Route
          path="/Impact-Of-The-Maternity-Benefit-Act"
          element={<ImpactOfTheMaternityBenefitAct />}
        />
        <Route
          path="/Projecting-Culture-Shaping-Perceptions"
          element={<ProjectingCultureShapingPerceptions />}
        />
        <Route
          path="/The-Intersection-Of-Women-Empowerment"
          element={<TheIntersectionOfWomenEmpowerment />}
        />
        <Route
          path="/Scripts-Symbols-and-Soft-Power-Tracing-Indias-Cultural-Diplomacy-in-Global-Affairs"
          element={<ScriptsSymbolsSoftPower />}
        />
        <Route
          path="/Sovereignty-Strategy-And-Systemic-Strain"
          element={<SovereigntyStrategyAndSystemicStrain/>}
        />
        <Route
          path="/Evaluating-Policy-Gaps-And-Youth-Involvement"
          element={<EvaluatingPolicyGapsAndYouthInvolvement />}
        />
        <Route 
          path="/Multipolar-Worldmaking"
          element= {<MultipolarWorldmaking />}
        />
        <Route
          path="/Bridging-The-Education-Gap"
          element={<BridgingTheEducationGap />}
        />
        <Route 
          path="/India-US-Bilateral-Relations"
          element={<IndiaUSBilateralRelations />}
        />
        <Route
          path="/Diplomacy-Beyond-Diplomats"
          element={<DiplomacyBeyondDiplomats />}
        />
        <Route
          path="/From-Gram-Sabha-To-Eco-Swaraj"
          element={<FromGramSabhaToEcoSwaraj/>}
        />
        <Route
          path="/Impact-Of-Social-Protection-Policies"
          element={<ImpactOfSocialProtectionPolicies/>}
        />
        <Route
          path="/Rewiring-The-Engines-Of-Growth"
          element={<RewiringTheEnginesOfGrowth />}
        />
        <Route
          path="/Reconciling-Development-And-Ecology"
          element={<ReconcilingDevelopmentAndEcology/>}
        />
        <Route
          path="/Geopolitical-Stress-Impacting-Financial-Markets-In-India"
          element={<GeopoliticalStressImpactingFinancialMarketsInIndia/>}
        />
        <Route
          path="/The-Informal-Gig-Economy-In-Globalised-India"
          element={<TheInformalGigEconomyInGlobalisedIndia/>}
        />
        <Route
          path="/Understanding-The-Mind-In-Decline"
          element={<UnderstandingTheMindInDecline/>}
        />
        
        <Route
          path="/Beyond-Firewalls-The-Human-Factor-In-Cybersecurity"
          element={<BeyondFirewalls/>}
        />
        <Route
          path="/Economics"
          element={<Economics />}
          />
           <Route
          path="/Mahatma-Gandhi-Rural"
          element={<MahatmaGandhiRural />}
          />
           <Route
          path="/India-Approach-Crisis"
          element={<IndiaApproachCrisis />}
          />
           <Route
          path="/From-Passive-Player-To-Active-Participant"
          element={<FromPassivePlayer />}
          />

          <Route
          path="/From-Traditional"
          element={<FromTraditional />}
          />
          <Route
          path="/Impact-Analysis"
          element={<ImpactAnalysis />}
          />
          <Route
          path="/India-Policy-Promote"
          element={<IndiaPolicyPromote />}
          />
          <Route
          path="/Smoke-Sludge"
          element={<SmokeSludge />}
          />
          <Route
          path="/Who-Deserve-To-Be"
          element={<WhoDeserveToBe/>}
          />
          <Route
          path="/Bridging-The-Divide"
          element={<BridgingTheDivide/>}
          />
          <Route
          path="/From-Paper-To-Practice"
          element={<FromPaperToPractice/>}
          />
          <Route
          path="/Impact-Of-Trump-Era-US-Migration-Policy"
          element={<ImpactOfTrump/>}
          />
          <Route
          path="/Localizing-Climate-Action"
          element={<LocalizingClimateAction/>}
          />
          <Route
          path="/Advancing-Urban"
          element={<AdvancingUrban/>}
          />
          <Route
          path="/Relationship-Between-Identity"
          element={<RelationshipBetweenIdentity/>}
          />
          <Route
          path="/From-Hegemony-to-Humanitarianism"
          element={<FromHegemonytoHumanitarianism/>}
          />
          <Route
          path="/Fiscal-Risk"
          element={<FiscalRisk/>}
          />
          <Route
          path="/From-Policy-To-Progress"
          element={<FromPolicyToProgress/>}
          />

          
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
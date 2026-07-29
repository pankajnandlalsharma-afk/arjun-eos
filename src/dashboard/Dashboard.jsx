import React from "react";

import "./dashboard.css";

import ExecutiveSummary from "./ExecutiveSummary";
import KPIGrid from "./KPIGrid";
import Pipeline from "./Pipeline";
import AIStatus from "./AIStatus";
import EnterpriseHealth from "./EnterpriseHealth";
import NotificationPanel from "./NotificationPanel";
import ActivityTimeline from "./ActivityTimeline";
import QuickActions from "./QuickActions";

export default function Dashboard(){

    return(

        <div className="dashboard-container">

            <ExecutiveSummary />

            <KPIGrid />

            <Pipeline />

            <AIStatus />

            <EnterpriseHealth />

            <NotificationPanel />

            <ActivityTimeline />

            <QuickActions />

        </div>

    );

}
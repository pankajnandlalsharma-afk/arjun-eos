import React, { useMemo, useState } from "react";

export const menu = [
  { section:"HOME", items:[{id:"dashboard",icon:"🏠",title:"Dashboard"}]},
  { section:"ENTERPRISE", items:[
    {id:"mission",icon:"🎯",title:"Mission Control"},
    {id:"founderMemory",icon:"🧠",title:"Founder Memory"}]},
  { section:"KNOWLEDGE", items:[
    {id:"knowledge",icon:"📖",title:"Knowledge Base"},
    {id:"knowledge-import",icon:"📥",title:"Knowledge Import"},
    {id:"subjects",icon:"📚",title:"Subject Registry"},
    {id:"modules",icon:"🧩",title:"Module Registry"},
    {id:"projects",icon:"📁",title:"Projects"}]},
  { section:"QUIZ ECOSYSTEM", items:[
    {id:"quiz",icon:"📝",title:"Quiz Studio"},
    {id:"segment",icon:"🏭",title:"Segment Factory"},
    {id:"channels",icon:"📺",title:"Channel Explorer"},
    {id:"production",icon:"🎬",title:"Production Tracker"}]},
  { section:"AI & AUTOMATION", items:[
    {id:"ai",icon:"🤖",title:"AI Agents"},
    {id:"prompts",icon:"💡",title:"Prompt Library"},
    {id:"sops",icon:"📚",title:"SOP Library"}]},
  { section:"LEGAL", items:[
    {id:"legal",icon:"⚖️",title:"Legal Studio"}]}
];

export default function Sidebar({currentPage,setCurrentPage}){
  const [collapsed,setCollapsed]=useState(false);
  const [search,setSearch]=useState("");

  const filtered=useMemo(()=>{
    const q=search.trim().toLowerCase();
    if(!q) return menu;
    return menu.map(s=>({...s,items:s.items.filter(i=>i.title.toLowerCase().includes(q))}))
      .filter(s=>s.items.length);
  },[search]);

  const modules=menu.reduce((a,s)=>a+s.items.length,0);

  return (
    <aside className={collapsed?"sidebar collapsed":"sidebar"}>
      <div className="sidebar-header">
        <div>
          <div className="sidebar-title">{collapsed?"AE":"ARJUN EOS"}</div>
          {!collapsed && <div className="sidebar-subtitle">Enterprise Operating System</div>}
        </div>
        <button className="collapse-btn" onClick={()=>setCollapsed(!collapsed)}>
          {collapsed?"»":"«"}
        </button>
      </div>

      {!collapsed &&
      <div className="sidebar-search">
        <input
          className="enterprise-search"
          value={search}
          onChange={e=>setSearch(e.target.value)}
          placeholder="Search modules..."
        />
      </div>}

      <div className="sidebar-scroll">
        {filtered.map(section=>(
          <div className="sidebar-section" key={section.section}>
            {!collapsed && <div className="sidebar-section-title">{section.section}</div>}
            {section.items.map(item=>(
              <button
                key={item.id}
                className={currentPage===item.id?"menu-item active":"menu-item"}
                onClick={()=>setCurrentPage(item.id)}>
                <span className="menu-icon">{item.icon}</span>
                {!collapsed && <span>{item.title}</span>}
              </button>
            ))}
            {!collapsed && <hr className="sidebar-divider"/>}
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        {!collapsed ? (
          <>
            <div><strong>ARJUN EOS v0.1 Alpha</strong></div>
            <div>{modules} Modules | {menu.length} Sections</div>
          </>
        ):<div>AE</div>}
      </div>
    </aside>
  );
}
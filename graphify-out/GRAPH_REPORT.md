# Graph Report - .  (2026-06-15)

## Corpus Check
- Corpus is ~20,978 words - fits in a single context window. You may not need a graph.

## Summary
- 484 nodes · 649 edges · 39 communities (37 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.75)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Main Pages & Core Components|Main Pages & Core Components]]
- [[_COMMUNITY_Dependencies|Dependencies]]
- [[_COMMUNITY_Sidebar & Layout|Sidebar & Layout]]
- [[_COMMUNITY_Dev Dependencies & Package Info|Dev Dependencies & Package Info]]
- [[_COMMUNITY_Toast Notification System|Toast Notification System]]
- [[_COMMUNITY_App TypeScript Config|App TypeScript Config]]
- [[_COMMUNITY_Basic UI Controls|Basic UI Controls]]
- [[_COMMUNITY_Interactive UI & Pagination|Interactive UI & Pagination]]
- [[_COMMUNITY_Dialogs & Commands|Dialogs & Commands]]
- [[_COMMUNITY_Component Aliases & Styling|Component Aliases & Styling]]
- [[_COMMUNITY_Node TypeScript Config|Node TypeScript Config]]
- [[_COMMUNITY_Carousel Component|Carousel Component]]
- [[_COMMUNITY_Base TypeScript Config|Base TypeScript Config]]
- [[_COMMUNITY_Forms|Forms]]
- [[_COMMUNITY_Menubar|Menubar]]
- [[_COMMUNITY_Charts|Charts]]
- [[_COMMUNITY_Context Menus|Context Menus]]
- [[_COMMUNITY_Dropdown Menus|Dropdown Menus]]
- [[_COMMUNITY_Alert Dialogs|Alert Dialogs]]
- [[_COMMUNITY_Tables|Tables]]
- [[_COMMUNITY_Breadcrumbs|Breadcrumbs]]
- [[_COMMUNITY_Drawers|Drawers]]
- [[_COMMUNITY_Navigation Menus|Navigation Menus]]
- [[_COMMUNITY_Toggle Components|Toggle Components]]
- [[_COMMUNITY_Alerts|Alerts]]
- [[_COMMUNITY_OTP Inputs|OTP Inputs]]
- [[_COMMUNITY_Avatars|Avatars]]
- [[_COMMUNITY_Badges|Badges]]
- [[_COMMUNITY_Tabs|Tabs]]
- [[_COMMUNITY_Radio Groups|Radio Groups]]
- [[_COMMUNITY_Project Meta|Project Meta]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 69 edges
2. `compilerOptions` - 19 edges
3. `compilerOptions` - 14 edges
4. `Button` - 11 edges
5. `useToast()` - 10 edges
6. `compilerOptions` - 9 edges
7. `tailwind` - 6 edges
8. `aliases` - 6 edges
9. `scripts` - 6 edges
10. `buttonVariants` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Lovable Project` --conceptually_related_to--> `IELTS AI Instructor`  [INFERRED]
  README.md → index.html
- `AlertDialogHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `AlertDialogFooter()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `BreadcrumbSeparator()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/breadcrumb.tsx → src/lib/utils.ts
- `BreadcrumbEllipsis()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/breadcrumb.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (39 total, 2 thin omitted)

### Community 0 - "Main Pages & Core Components"
Cohesion: 0.06
Nodes (32): FeatureCard(), FeatureCardProps, Footer(), useToast(), Contact(), NotFound(), SignIn(), SignUp() (+24 more)

### Community 1 - "Dependencies"
Cohesion: 0.04
Nodes (50): dependencies, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @hookform/resolvers, input-otp (+42 more)

### Community 2 - "Sidebar & Layout"
Cohesion: 0.05
Nodes (36): useIsMobile(), SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay, SheetTitle (+28 more)

### Community 3 - "Dev Dependencies & Package Info"
Cohesion: 0.07
Nodes (28): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, lovable-tagger (+20 more)

### Community 4 - "Toast Notification System"
Cohesion: 0.12
Nodes (22): Action, ActionType, actionTypes, addToRemoveQueue(), dispatch(), genId(), listeners, memoryState (+14 more)

### Community 5 - "App TypeScript Config"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+13 more)

### Community 6 - "Basic UI Controls"
Cohesion: 0.10
Nodes (11): AccordionContent, AccordionItem, AccordionTrigger, Checkbox, HoverCardContent, PopoverContent, Progress, ScrollArea (+3 more)

### Community 7 - "Interactive UI & Pagination"
Cohesion: 0.18
Nodes (15): cn(), ButtonProps, buttonVariants, Calendar(), CalendarProps, Pagination(), PaginationContent, PaginationEllipsis() (+7 more)

### Community 8 - "Dialogs & Commands"
Cohesion: 0.12
Nodes (15): Command, CommandDialogProps, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator (+7 more)

### Community 9 - "Component Aliases & Styling"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 10 - "Node TypeScript Config"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 11 - "Carousel Component"
Cohesion: 0.14
Nodes (12): Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem, CarouselNext, CarouselOptions (+4 more)

### Community 12 - "Base TypeScript Config"
Cohesion: 0.15
Nodes (12): compilerOptions, allowJs, baseUrl, noImplicitAny, noUnusedLocals, noUnusedParameters, paths, skipLibCheck (+4 more)

### Community 13 - "Forms"
Cohesion: 0.17
Nodes (9): FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue, FormLabel (+1 more)

### Community 14 - "Menubar"
Cohesion: 0.17
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 15 - "Charts"
Cohesion: 0.18
Nodes (7): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartTooltipContent, THEMES

### Community 16 - "Context Menus"
Cohesion: 0.20
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 17 - "Dropdown Menus"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 18 - "Alert Dialogs"
Cohesion: 0.22
Nodes (8): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle

### Community 19 - "Tables"
Cohesion: 0.22
Nodes (8): Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow

### Community 20 - "Breadcrumbs"
Cohesion: 0.25
Nodes (7): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 21 - "Drawers"
Cohesion: 0.25
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 22 - "Navigation Menus"
Cohesion: 0.25
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 23 - "Toggle Components"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 24 - "Alerts"
Cohesion: 0.40
Nodes (4): Alert, AlertDescription, AlertTitle, alertVariants

### Community 25 - "OTP Inputs"
Cohesion: 0.40
Nodes (4): InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 26 - "Avatars"
Cohesion: 0.50
Nodes (3): Avatar, AvatarFallback, AvatarImage

### Community 27 - "Badges"
Cohesion: 0.67
Nodes (3): Badge(), BadgeProps, badgeVariants

### Community 28 - "Tabs"
Cohesion: 0.50
Nodes (3): TabsContent, TabsList, TabsTrigger

## Knowledge Gaps
- **319 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+314 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Interactive UI & Pagination` to `Main Pages & Core Components`, `Sidebar & Layout`, `Toast Notification System`, `Basic UI Controls`, `Dialogs & Commands`, `Carousel Component`, `Forms`, `Menubar`, `Charts`, `Context Menus`, `Dropdown Menus`, `Alert Dialogs`, `Tables`, `Breadcrumbs`, `Drawers`, `Navigation Menus`, `Toggle Components`, `Alerts`, `OTP Inputs`, `Avatars`, `Badges`, `Tabs`, `Radio Groups`?**
  _High betweenness centrality (0.217) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Dependencies` to `Dev Dependencies & Package Info`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _319 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Main Pages & Core Components` be split into smaller, more focused modules?**
  _Cohesion score 0.06487434248977206 - nodes in this community are weakly interconnected._
- **Should `Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.04 - nodes in this community are weakly interconnected._
- **Should `Sidebar & Layout` be split into smaller, more focused modules?**
  _Cohesion score 0.05226480836236934 - nodes in this community are weakly interconnected._
- **Should `Dev Dependencies & Package Info` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
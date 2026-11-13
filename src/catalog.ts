export const formats=['YouTube Motion Graphics','AI Videos','Reels and Shorts','Carousel Posts','Instagram Stories','Documentary and Explainer Videos','Titles and Typography','Transitions and Editing Techniques','Thumbnails and Posters','Real Estate and Property Videos'];
export const styles=['Paper cutout','Mixed-media collage','Editorial','Scrapbook','Documentary','Cinematic','Kinetic typography','Minimalist','Brutalist','Retro/VHS','Stop motion','3D','Parallax','Infographic','Luxury real estate'];
export const sources=[
 ['Pinterest','https://in.pinterest.com/','Broad visual discovery, layouts, and saved references. Public-wide API search is not verified.','Design'],
 ['Behance','https://www.behance.net/','Complete creative projects, branding, editorial, and motion design.','Design'],
 ['Cosmos','https://www.cosmos.so/','Visual collections, color inspiration, and similar-image exploration.','Design'],
 ['Savee','https://savee.com/','Curated graphic and motion references. Official MCP is paid; not connected in this app.','Design'],
 ['Are.na','https://www.are.na/','Curated channels of images, videos, and links. Official v3 API exists; adapter pending.','Design'],
 ['Designspiration','https://www.designspiration.com/','Graphic design, typography, layouts, and color inspiration.','Design'],
 ['Dribbble','https://dribbble.com/','Motion design, typography, illustration, and interface animation.','Design'],
 ['Eyecandy','https://eyecannndy.com/','Visual techniques, editing examples, collage, transitions, and camera techniques.','Motion'],
 ['Raivcoo','https://raivcoo.com/','Motion graphics, documentary styles, commercial references, and transitions.','Motion'],
 ['Art of the Title','https://www.artofthetitle.com/','Opening sequences, title design, typography, and visual storytelling.','Motion'],
 ['Stash','https://www.stashmedia.tv/','Animation, VFX, and commercials. Public articles and paid collections differ.','Motion'],
 ['Swishy Graphics','https://www.swishy.ai/graphics','Typography, charts, timelines, newspaper treatments, and social graphics. Generation and export may be paid.','Motion'],
 ['YouTube','https://www.youtube.com/','Official API search with your key. Videos open in your browser; embed restrictions are respected.','Motion'],
 ['Instagram','https://www.instagram.com/','Save public Reel, post, or carousel links. Discovery and embedding are not integrated.','Motion'],
 ['Flim','https://flim.ai/','Cinematic stills and visual reference discovery. Paid features may apply.','Cinema'],
 ['FilmGrab','https://film-grab.com/','Film composition, lighting, framing, and color. Reference material, not reusable stock.','Cinema'],
 ['Runway Watch','https://watch.runwayml.com/','AI film examples and creative direction. Production prompts are not inferred.','Cinema'],
 ['Mixkit','https://mixkit.co/','Footage, audio, and templates. Check each item’s license on its original page.','Assets'],
 ['Pexels','https://www.pexels.com/','Photography and footage. New API key issuance is paused as of the verification date.','Assets'],
 ['Shots','https://shots.so/','Supplementary mockup and presentation tool, not a reference-search library.','Tool']
].map(([name,url,description,group])=>({name,url,description,group}));
export function browserUrl(name:string,q:string){return name==='YouTube'?`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`:sources.find(s=>s.name===name)!.url;}

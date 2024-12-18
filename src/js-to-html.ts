"use strict";

var SCRIPT_IS_VOID = true;

export function setScriptIsVoid(is:boolean){
    SCRIPT_IS_VOID = is;
    htmlTags.script["void"] = is;
    htmlTags.script.mandatoryTag = is ? "src" : null;
}

function isPlainObject(x:any):boolean{
    return typeof x==="object" && x && x.constructor === Object;
}

function spaces(n:number):string{
    return new Array(n+1).join(' ');
}

type HtmlReservedSymbolKeys="&"|"<"|">"|"'"|"\"";
var htmlReservedSymbols:{[key:string]:string}={
    '&' :'&amp;',
    '<' :'&lt;',
    '>' :'&gt;',
    "'" :'&#39;',
    '"' :'&quot;'
};

export type ArrayContent = (HtmlBase|string|HTMLElement|null)[]
export type Content = string|ArrayContent|null

export type Attr4HTMLElement = {
    class?:string | string[],
    id?:string,
    $on?:{click?:EventListener, blur?:EventListener},
    $attrs?:{[key:string]:string},
    accesskey?:any,autocapitalize?:any,contenteditable?:any,dir?:any,draggable?:any,hidden?:any,inputmode?:any,is?:any,itemid?:any,itemprop?:any,itemref?:any,itemscope?:any,itemtype?:any,lang?:any,nonce?:any,spellcheck?:any,style?:any,tabindex?:any,title?:any,translate?:any
}

// viene de attrTypes.data
export interface Attr4HTMLAnchorElement extends Attr4HTMLElement {href?:any,target?:any,download?:any,ping?:any,rel?:any,hreflang?:any,type?:any,referrerpolicy?:any,}
export interface Attr4HTMLAreaElement extends Attr4HTMLElement {alt?:any,coords?:any,shape?:any,href?:any,target?:any,download?:any,ping?:any,rel?:any,referrerpolicy?:any,}
export interface Attr4HTMLAudioElement extends Attr4HTMLElement {src?:any,crossorigin?:any,preload?:any,autoplay?:any,loop?:any,muted?:any,controls?:any,}
export interface Attr4HTMLBaseElement extends Attr4HTMLElement {href?:any,target?:any,}
export interface Attr4HTMLQuoteElement extends Attr4HTMLElement {cite?:any,}
export interface Attr4HTMLBodyElement extends Attr4HTMLElement {onafterprint?:any,onbeforeprint?:any,onbeforeunload?:any,onhashchange?:any,onlanguagechange?:any,onmessage?:any,onmessageerror?:any,onoffline?:any,ononline?:any,onpagehide?:any,onpageshow?:any,onpopstate?:any,onrejectionhandled?:any,onstorage?:any,onunhandledrejection?:any,onunload?:any,}
export interface Attr4HTMLBRElement extends Attr4HTMLElement {}
export interface Attr4HTMLButtonElement extends Attr4HTMLElement {autofocus?:any,disabled?:any,form?:any,formaction?:any,formenctype?:any,formmethod?:any,formnovalidate?:any,formtarget?:any,name?:any,type?:any,value?:any,}
export interface Attr4HTMLCanvasElement extends Attr4HTMLElement {width?:any,height?:any,}
export interface Attr4HTMLTableCaptionElement extends Attr4HTMLElement {}
export interface Attr4HTMLTableColElement extends Attr4HTMLElement {span?:any,}
export interface Attr4HTMLDataElement extends Attr4HTMLElement {value?:any,}
export interface Attr4HTMLDataListElement extends Attr4HTMLElement {}
export interface Attr4HTMLModElement extends Attr4HTMLElement {cite?:any,datetime?:any,}
export interface Attr4HTMLDetailsElement extends Attr4HTMLElement {open?:any,}
export interface Attr4HTMLDialogElement extends Attr4HTMLElement {open?:any,}
export interface Attr4HTMLDivElement extends Attr4HTMLElement {}
export interface Attr4HTMLDListElement extends Attr4HTMLElement {}
export interface Attr4HTMLEmbedElement extends Attr4HTMLElement {src?:any,type?:any,width?:any,height?:any,any?:any,}
export interface Attr4HTMLFieldSetElement extends Attr4HTMLElement {disabled?:any,form?:any,name?:any,}
export interface Attr4HTMLFormElement extends Attr4HTMLElement {"accept-charset"?:any,action?:any,autocomplete?:any,enctype?:any,method?:any,name?:any,novalidate?:any,target?:any,}
export interface Attr4HTMLHeadingElement extends Attr4HTMLElement {}
export interface Attr4HTMLHeadElement extends Attr4HTMLElement {}
export interface Attr4HTMLHRElement extends Attr4HTMLElement {}
export interface Attr4HTMLHtmlElement extends Attr4HTMLElement {manifest?:any,}
export interface Attr4HTMLIFrameElement extends Attr4HTMLElement {src?:any,srcdoc?:any,name?:any,sandbox?:any,allowfullscreen?:any,allowpaymentrequest?:any,allowusermedia?:any,width?:any,height?:any,referrerpolicy?:any,}
export interface Attr4HTMLImageElement extends Attr4HTMLElement {alt?:any,src?:any,srcset?:any,crossorigin?:any,usemap?:any,ismap?:any,width?:any,height?:any,decoding?:any,referrerpolicy?:any,}
export interface Attr4HTMLInputElement extends Attr4HTMLElement {accept?:any,alt?:any,autocomplete?:any,autofocus?:any,checked?:any,dirname?:any,disabled?:any,form?:any,formaction?:any,formenctype?:any,formmethod?:any,formnovalidate?:any,formtarget?:any,height?:any,list?:any,max?:any,maxlength?:any,min?:any,minlength?:any,multiple?:any,name?:any,pattern?:any,placeholder?:any,readonly?:any,required?:any,size?:any,src?:any,step?:any,type?:any,value?:any,width?:any,}
export interface Attr4HTMLLabelElement extends Attr4HTMLElement {for?:any,}
export interface Attr4HTMLLegendElement extends Attr4HTMLElement {}
export interface Attr4HTMLLIElement extends Attr4HTMLElement {value?:any,}
export interface Attr4HTMLLinkElement extends Attr4HTMLElement {href?:any,crossorigin?:any,rel?:any,as?:any,media?:any,hreflang?:any,type?:any,sizes?:any,referrerpolicy?:any,integrity?:any,}
export interface Attr4HTMLMapElement extends Attr4HTMLElement {name?:any,}
export interface Attr4Element extends Attr4HTMLElement {"per [MATHML]"?:any,}
export interface Attr4HTMLMenuElement extends Attr4HTMLElement {}
export interface Attr4HTMLMetaElement extends Attr4HTMLElement {name?:any,"http-equiv"?:any,content?:any,charset?:any,}
export interface Attr4HTMLMeterElement extends Attr4HTMLElement {value?:any,min?:any,max?:any,low?:any,high?:any,optimum?:any,}
export interface Attr4HTMLObjectElement extends Attr4HTMLElement {data?:any,type?:any,typemustmatch?:any,name?:any,usemap?:any,form?:any,width?:any,height?:any,}
export interface Attr4HTMLOListElement extends Attr4HTMLElement {reversed?:any,start?:any,type?:any,}
export interface Attr4HTMLOptGroupElement extends Attr4HTMLElement {disabled?:any,label?:any,}
export interface Attr4HTMLOptionElement extends Attr4HTMLElement {disabled?:any,label?:any,selected?:any,value?:any,}
export interface Attr4HTMLOutputElement extends Attr4HTMLElement {for?:any,form?:any,name?:any,}
export interface Attr4HTMLParagraphElement extends Attr4HTMLElement {}
export interface Attr4HTMLParamElement extends Attr4HTMLElement {name?:any,value?:any,}
export interface Attr4HTMLPictureElement extends Attr4HTMLElement {}
export interface Attr4HTMLPreElement extends Attr4HTMLElement {}
export interface Attr4HTMLProgressElement extends Attr4HTMLElement {value?:any,max?:any,}
export interface Attr4HTMLScriptElement extends Attr4HTMLElement {src?:any,type?:any,async?:any,defer?:any,crossorigin?:any,integrity?:any,}
export interface Attr4HTMLSelectElement extends Attr4HTMLElement {autocomplete?:any,autofocus?:any,disabled?:any,form?:any,multiple?:any,name?:any,required?:any,size?:any,}
export interface Attr4HTMLSlotElement extends Attr4HTMLElement {name?:any,}
export interface Attr4HTMLSourceElement extends Attr4HTMLElement {src?:any,"type srcset"?:any,sizes?:any,media?:any,}
export interface Attr4HTMLSpanElement extends Attr4HTMLElement {}
export interface Attr4HTMLStyleElement extends Attr4HTMLElement {media?:any,}
export interface Attr4SVGSVGElement extends Attr4HTMLElement {focusable?:any,viewbox?:any,"aria-hidden"?:any,}
export interface Attr4HTMLTableElement extends Attr4HTMLElement {}
export interface Attr4HTMLTableSectionElement extends Attr4HTMLElement {}
export interface Attr4HTMLTableCellElement extends Attr4HTMLElement {colspan?:any,rowspan?:any,headers?:any,}
export interface Attr4HTMLTemplateElement extends Attr4HTMLElement {}
export interface Attr4HTMLTextAreaElement extends Attr4HTMLElement {autofocus?:any,cols?:any,dirname?:any,disabled?:any,form?:any,maxlength?:any,minlength?:any,name?:any,placeholder?:any,readonly?:any,required?:any,rows?:any,wrap?:any,}
export interface Attr4HTMLTimeElement extends Attr4HTMLElement {datetime?:any,}
export interface Attr4HTMLTitleElement extends Attr4HTMLElement {}
export interface Attr4HTMLTableRowElement extends Attr4HTMLElement {}
export interface Attr4HTMLTrackElement extends Attr4HTMLElement {default?:any,kind?:any,label?:any,src?:any,srclang?:any,}
export interface Attr4HTMLUListElement extends Attr4HTMLElement {}
export interface Attr4HTMLVideoElement extends Attr4HTMLElement {src?:any,crossorigin?:any,poster?:any,preload?:any,autoplay?:any,playsinline?:any,loop?:any,muted?:any,controls?:any,width?:any,height?:any,}
export interface Attr4SVGCircleElement extends Attr4HTMLElement {cx?:any,cy?:any,r?:any,}
export interface Attr4SVGPathElement extends Attr4HTMLElement {d?:any}

var auditArrange:undefined | ((what:string, setting:boolean)=>void);

export var html={
    defaultTitle:"",
    insecureModeEnabled:true,
    mandatoryTitle:true,
    optimizingArrange:true,
    auditArrange,
    _text(text:string){
        return direct({textNode:text})
    },
    _comment(text:string){
        return direct({commentText:text});
    },
    includeHtml(htmlCode:string){
        if(!this.insecureModeEnabled){
            throw new Error("jsToHtml.html.includeHtml: insecure functions not allowed");
        }
        return direct({htmlCode:htmlCode, validator:this.includeHtmlValidator});
    },
    includeHtmlValidator(htmlText:string){
        return /^((<[^<>]+>)|[^<>]+|\n)*$/.test(htmlText);
    },
    // auto generated in tagInterface.data
    a(optsOrContent?:Attr4HTMLAnchorElement|Content, content?:Content){ return indirect("a", optsOrContent, content) as HtmlTag<HTMLAnchorElement>; },
    abbr(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("abbr", optsOrContent, content) as HtmlTag<HTMLElement>; },
    address(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("address", optsOrContent, content) as HtmlTag<HTMLElement>; },
    area(opts?:Attr4HTMLAreaElement|Content){ return indirect("area", opts) as HtmlTag<HTMLAreaElement>; },
    article(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("article", optsOrContent, content) as HtmlTag<HTMLElement>; },
    aside(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("aside", optsOrContent, content) as HtmlTag<HTMLElement>; },
    audio(optsOrContent?:Attr4HTMLAudioElement|Content, content?:Content){ return indirect("audio", optsOrContent, content) as HtmlTag<HTMLAudioElement>; },
    b(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("b", optsOrContent, content) as HtmlTag<HTMLElement>; },
    base(opts?:Attr4HTMLBaseElement|Content){ return indirect("base", opts) as HtmlTag<HTMLBaseElement>; },
    bdi(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("bdi", optsOrContent, content) as HtmlTag<HTMLElement>; },
    bdo(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("bdo", optsOrContent, content) as HtmlTag<HTMLElement>; },
    blockquote(optsOrContent?:Attr4HTMLQuoteElement|Content, content?:Content){ return indirect("blockquote", optsOrContent, content) as HtmlTag<HTMLQuoteElement>; },
    body(optsOrContent?:Attr4HTMLBodyElement|Content, content?:Content){ return indirect("body", optsOrContent, content) as HtmlTag<HTMLBodyElement>; },
    br(opts?:Attr4HTMLBRElement|Content){ return indirect("br", opts) as HtmlTag<HTMLBRElement>; },
    button(optsOrContent?:Attr4HTMLButtonElement|Content, content?:Content){ return indirect("button", optsOrContent, content) as HtmlTag<HTMLButtonElement>; },
    canvas(optsOrContent?:Attr4HTMLCanvasElement|Content, content?:Content){ return indirect("canvas", optsOrContent, content) as HtmlTag<HTMLCanvasElement>; },
    caption(optsOrContent?:Attr4HTMLTableCaptionElement|Content, content?:Content){ return indirect("caption", optsOrContent, content) as HtmlTag<HTMLTableCaptionElement>; },
    cite(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("cite", optsOrContent, content) as HtmlTag<HTMLElement>; },
    code(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("code", optsOrContent, content) as HtmlTag<HTMLElement>; },
    col(opts?:Attr4HTMLTableColElement|Content){ return indirect("col", opts) as HtmlTag<HTMLTableColElement>; },
    colgroup(optsOrContent?:Attr4HTMLTableColElement|Content, content?:Content){ return indirect("colgroup", optsOrContent, content) as HtmlTag<HTMLTableColElement>; },
    data(optsOrContent?:Attr4HTMLDataElement|Content, content?:Content){ return indirect("data", optsOrContent, content) as HtmlTag<HTMLDataElement>; },
    datalist(optsOrContent?:Attr4HTMLDataListElement|Content, content?:Content){ return indirect("datalist", optsOrContent, content) as HtmlTag<HTMLDataListElement>; },
    dd(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("dd", optsOrContent, content) as HtmlTag<HTMLElement>; },
    del(optsOrContent?:Attr4HTMLModElement|Content, content?:Content){ return indirect("del", optsOrContent, content) as HtmlTag<HTMLModElement>; },
    details(optsOrContent?:Attr4HTMLDetailsElement|Content, content?:Content){ return indirect("details", optsOrContent, content) as HtmlTag<HTMLDetailsElement>; },
    dfn(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("dfn", optsOrContent, content) as HtmlTag<HTMLElement>; },
    dialog(optsOrContent?:Attr4HTMLDialogElement|Content, content?:Content){ return indirect("dialog", optsOrContent, content) as HtmlTag<HTMLDialogElement>; },
    div(optsOrContent?:Attr4HTMLDivElement|Content, content?:Content){ return indirect("div", optsOrContent, content) as HtmlTag<HTMLDivElement>; },
    dl(optsOrContent?:Attr4HTMLDListElement|Content, content?:Content){ return indirect("dl", optsOrContent, content) as HtmlTag<HTMLDListElement>; },
    dt(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("dt", optsOrContent, content) as HtmlTag<HTMLElement>; },
    em(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("em", optsOrContent, content) as HtmlTag<HTMLElement>; },
    embed(opts?:Attr4HTMLEmbedElement|Content){ return indirect("embed", opts) as HtmlTag<HTMLEmbedElement>; },
    fieldset(optsOrContent?:Attr4HTMLFieldSetElement|Content, content?:Content){ return indirect("fieldset", optsOrContent, content) as HtmlTag<HTMLFieldSetElement>; },
    figcaption(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("figcaption", optsOrContent, content) as HtmlTag<HTMLElement>; },
    figure(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("figure", optsOrContent, content) as HtmlTag<HTMLElement>; },
    footer(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("footer", optsOrContent, content) as HtmlTag<HTMLElement>; },
    form(optsOrContent?:Attr4HTMLFormElement|Content, content?:Content){ return indirect("form", optsOrContent, content) as HtmlTag<HTMLFormElement>; },
    h1(optsOrContent?:Attr4HTMLHeadingElement|Content, content?:Content){ return indirect("h1", optsOrContent, content) as HtmlTag<HTMLHeadingElement>; },
    h2(optsOrContent?:Attr4HTMLHeadingElement|Content, content?:Content){ return indirect("h2", optsOrContent, content) as HtmlTag<HTMLHeadingElement>; },
    h3(optsOrContent?:Attr4HTMLHeadingElement|Content, content?:Content){ return indirect("h3", optsOrContent, content) as HtmlTag<HTMLHeadingElement>; },
    h4(optsOrContent?:Attr4HTMLHeadingElement|Content, content?:Content){ return indirect("h4", optsOrContent, content) as HtmlTag<HTMLHeadingElement>; },
    h5(optsOrContent?:Attr4HTMLHeadingElement|Content, content?:Content){ return indirect("h5", optsOrContent, content) as HtmlTag<HTMLHeadingElement>; },
    h6(optsOrContent?:Attr4HTMLHeadingElement|Content, content?:Content){ return indirect("h6", optsOrContent, content) as HtmlTag<HTMLHeadingElement>; },
    head(optsOrContent?:Attr4HTMLHeadElement|Content, content?:Content){ return indirect("head", optsOrContent, content) as HtmlTag<HTMLHeadElement>; },
    header(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("header", optsOrContent, content) as HtmlTag<HTMLElement>; },
    hgroup(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("hgroup", optsOrContent, content) as HtmlTag<HTMLElement>; },
    hr(opts?:Attr4HTMLHRElement|Content){ return indirect("hr", opts) as HtmlTag<HTMLHRElement>; },
    html(optsOrContent?:Attr4HTMLHtmlElement|Content, content?:Content){ return indirect("html", optsOrContent, content) as HtmlTag<HTMLHtmlElement>; },
    i(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("i", optsOrContent, content) as HtmlTag<HTMLElement>; },
    iframe(opts?:Attr4HTMLIFrameElement|Content){ return indirect("iframe", opts) as HtmlTag<HTMLIFrameElement>; },
    img(opts?:Attr4HTMLImageElement|Content){ return indirect("img", opts) as HtmlTag<HTMLImageElement>; },
    input(opts?:Attr4HTMLInputElement|Content){ return indirect("input", opts) as HtmlTag<HTMLInputElement>; },
    ins(optsOrContent?:Attr4HTMLModElement|Content, content?:Content){ return indirect("ins", optsOrContent, content) as HtmlTag<HTMLModElement>; },
    kbd(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("kbd", optsOrContent, content) as HtmlTag<HTMLElement>; },
    label(optsOrContent?:Attr4HTMLLabelElement|Content, content?:Content){ return indirect("label", optsOrContent, content) as HtmlTag<HTMLLabelElement>; },
    legend(optsOrContent?:Attr4HTMLLegendElement|Content, content?:Content){ return indirect("legend", optsOrContent, content) as HtmlTag<HTMLLegendElement>; },
    li(optsOrContent?:Attr4HTMLLIElement|Content, content?:Content){ return indirect("li", optsOrContent, content) as HtmlTag<HTMLLIElement>; },
    link(opts?:Attr4HTMLLinkElement|Content){ return indirect("link", opts) as HtmlTag<HTMLLinkElement>; },
    main(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("main", optsOrContent, content) as HtmlTag<HTMLElement>; },
    map(optsOrContent?:Attr4HTMLMapElement|Content, content?:Content){ return indirect("map", optsOrContent, content) as HtmlTag<HTMLMapElement>; },
    mark(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("mark", optsOrContent, content) as HtmlTag<HTMLElement>; },
    math(optsOrContent?:Attr4Element|Content, content?:Content){ return indirect("math", optsOrContent, content) as HtmlTag<HTMLElement>; },
    menu(optsOrContent?:Attr4HTMLMenuElement|Content, content?:Content){ return indirect("menu", optsOrContent, content) as HtmlTag<HTMLMenuElement>; },
    meta(opts?:Attr4HTMLMetaElement|Content){ return indirect("meta", opts) as HtmlTag<HTMLMetaElement>; },
    meter(optsOrContent?:Attr4HTMLMeterElement|Content, content?:Content){ return indirect("meter", optsOrContent, content) as HtmlTag<HTMLMeterElement>; },
    nav(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("nav", optsOrContent, content) as HtmlTag<HTMLElement>; },
    noscript(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("noscript", optsOrContent, content) as HtmlTag<HTMLElement>; },
    object(optsOrContent?:Attr4HTMLObjectElement|Content, content?:Content){ return indirect("object", optsOrContent, content) as HtmlTag<HTMLObjectElement>; },
    ol(optsOrContent?:Attr4HTMLOListElement|Content, content?:Content){ return indirect("ol", optsOrContent, content) as HtmlTag<HTMLOListElement>; },
    optgroup(optsOrContent?:Attr4HTMLOptGroupElement|Content, content?:Content){ return indirect("optgroup", optsOrContent, content) as HtmlTag<HTMLOptGroupElement>; },
    option(optsOrContent?:Attr4HTMLOptionElement|Content, content?:Content){ return indirect("option", optsOrContent, content) as HtmlTag<HTMLOptionElement>; },
    output(optsOrContent?:Attr4HTMLOutputElement|Content, content?:Content){ return indirect("output", optsOrContent, content) as HtmlTag<HTMLOutputElement>; },
    p(optsOrContent?:Attr4HTMLParagraphElement|Content, content?:Content){ return indirect("p", optsOrContent, content) as HtmlTag<HTMLParagraphElement>; },
    param(opts?:Attr4HTMLParamElement|Content){ return indirect("param", opts) as HtmlTag<HTMLParamElement>; },
    picture(optsOrContent?:Attr4HTMLPictureElement|Content, content?:Content){ return indirect("picture", optsOrContent, content) as HtmlTag<HTMLPictureElement>; },
    pre(optsOrContent?:Attr4HTMLPreElement|Content, content?:Content){ return indirect("pre", optsOrContent, content) as HtmlTag<HTMLPreElement>; },
    progress(optsOrContent?:Attr4HTMLProgressElement|Content, content?:Content){ return indirect("progress", optsOrContent, content) as HtmlTag<HTMLProgressElement>; },
    q(optsOrContent?:Attr4HTMLQuoteElement|Content, content?:Content){ return indirect("q", optsOrContent, content) as HtmlTag<HTMLQuoteElement>; },
    rp(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("rp", optsOrContent, content) as HtmlTag<HTMLElement>; },
    rt(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("rt", optsOrContent, content) as HtmlTag<HTMLElement>; },
    ruby(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("ruby", optsOrContent, content) as HtmlTag<HTMLElement>; },
    s(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("s", optsOrContent, content) as HtmlTag<HTMLElement>; },
    samp(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("samp", optsOrContent, content) as HtmlTag<HTMLElement>; },
    script(optsOrContent?:Attr4HTMLScriptElement){ return indirect("script", optsOrContent, arguments[1]) as HtmlTag<HTMLScriptElement>; },
    section(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("section", optsOrContent, content) as HtmlTag<HTMLElement>; },
    select(optsOrContent?:Attr4HTMLSelectElement|Content, content?:Content){ return indirect("select", optsOrContent, content) as HtmlTag<HTMLSelectElement>; },
    slot(optsOrContent?:Attr4HTMLSlotElement|Content, content?:Content){ return indirect("slot", optsOrContent, content) as HtmlTag<HTMLSlotElement>; },
    small(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("small", optsOrContent, content) as HtmlTag<HTMLElement>; },
    source(opts?:Attr4HTMLSourceElement|Content){ return indirect("source", opts) as HtmlTag<HTMLSourceElement>; },
    span(optsOrContent?:Attr4HTMLSpanElement|Content, content?:Content){ return indirect("span", optsOrContent, content) as HtmlTag<HTMLSpanElement>; },
    strong(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("strong", optsOrContent, content) as HtmlTag<HTMLElement>; },
    style(optsOrContent?:Attr4HTMLStyleElement|Content, content?:Content){ return indirect("style", optsOrContent, content) as HtmlTag<HTMLStyleElement>; },
    sub(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("sub", optsOrContent, content) as HtmlTag<HTMLElement>; },
    summary(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("summary", optsOrContent, content) as HtmlTag<HTMLElement>; },
    sup(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("sup", optsOrContent, content) as HtmlTag<HTMLElement>; },
    svg(optsOrContent?:Attr4SVGSVGElement|Content, content?:Content){ return indirect("svg", optsOrContent, content) as HtmlTag<SVGSVGElement>; },
    table(optsOrContent?:Attr4HTMLTableElement|Content, content?:Content){ return indirect("table", optsOrContent, content) as HtmlTag<HTMLTableElement>; },
    tbody(optsOrContent?:Attr4HTMLTableSectionElement|Content, content?:Content){ return indirect("tbody", optsOrContent, content) as HtmlTag<HTMLTableSectionElement>; },
    td(optsOrContent?:Attr4HTMLTableCellElement|Content, content?:Content){ return indirect("td", optsOrContent, content) as HtmlTag<HTMLTableCellElement>; },
    template(opts?:Attr4HTMLTemplateElement|Content){ return indirect("template", opts) as HtmlTag<HTMLTemplateElement>; },
    textarea(optsOrContent?:Attr4HTMLTextAreaElement|Content, content?:Content){ return indirect("textarea", optsOrContent, content) as HtmlTag<HTMLTextAreaElement>; },
    tfoot(optsOrContent?:Attr4HTMLTableSectionElement|Content, content?:Content){ return indirect("tfoot", optsOrContent, content) as HtmlTag<HTMLTableSectionElement>; },
    th(optsOrContent?:Attr4HTMLTableCellElement|Content, content?:Content){ return indirect("th", optsOrContent, content) as HtmlTag<HTMLTableCellElement>; },
    thead(optsOrContent?:Attr4HTMLTableSectionElement|Content, content?:Content){ return indirect("thead", optsOrContent, content) as HtmlTag<HTMLTableSectionElement>; },
    time(optsOrContent?:Attr4HTMLTimeElement|Content, content?:Content){ return indirect("time", optsOrContent, content) as HtmlTag<HTMLTimeElement>; },
    title(optsOrContent?:Attr4HTMLTitleElement|Content, content?:Content){ return indirect("title", optsOrContent, content) as HtmlTag<HTMLTitleElement>; },
    tr(optsOrContent?:Attr4HTMLTableRowElement|Content, content?:Content){ return indirect("tr", optsOrContent, content) as HtmlTag<HTMLTableRowElement>; },
    track(opts?:Attr4HTMLTrackElement|Content){ return indirect("track", opts) as HtmlTag<HTMLTrackElement>; },
    u(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("u", optsOrContent, content) as HtmlTag<HTMLElement>; },
    ul(optsOrContent?:Attr4HTMLUListElement|Content, content?:Content){ return indirect("ul", optsOrContent, content) as HtmlTag<HTMLUListElement>; },
    var(optsOrContent?:Attr4HTMLElement|Content, content?:Content){ return indirect("var", optsOrContent, content) as HtmlTag<HTMLElement>; },
    video(optsOrContent?:Attr4HTMLVideoElement|Content, content?:Content){ return indirect("video", optsOrContent, content) as HtmlTag<HTMLVideoElement>; },
    wbr(opts?:Attr4HTMLElement|Content){ return indirect("wbr", opts) as HtmlTag<HTMLElement>; },
    circle(opts?:Attr4SVGCircleElement|Content){ return indirect("circle", opts) as HtmlTag<SVGCircleElement>; },
    path(opts?:Attr4SVGPathElement|Content){ return indirect("path", opts) as HtmlTag<SVGPathElement>; },
    // end of autogenerated
}

function escapeChar(simpleText:string){
    simpleText=''+simpleText;
    return /[&<>'"]/.test(simpleText)?simpleText.replace(/[&<>'"]/g,function(c){ return htmlReservedSymbols[c]; }):simpleText;
}

function couldDirectTextContent(x:any){
    return typeof x==="string" || typeof x==="number";
};

function identity<T>(x:T){ return x; }

type KeyValidProperties="textNode"|"tagName"|"attributes"|"content"|"htmlCode"|"validator"|"commentText";

export type Checker={
    check:(value:any, directObject:DirectObject)=>boolean
    text?:string
}

export type ValidPropertiesChecker={
    checks:Checker[]
    transform?:(x:any)=>any
};
export type ValidPropertydProperty={
    textNode?:ValidPropertiesChecker
    tagName?:ValidPropertiesChecker
    attributes?:ValidPropertiesChecker
    content?:ValidPropertiesChecker
    htmlCode?:ValidPropertiesChecker
    validator?:ValidPropertiesChecker
    commentText?:ValidPropertiesChecker
    readonly [key:string]:ValidPropertiesChecker
}
type ValidPropertyInfo={
    classConstructor:typeof HtmlBase,
    properties:ValidPropertydProperty
}
type ValidProperties={
    textNode:ValidPropertyInfo,
    tagName:ValidPropertyInfo,
    htmlCode:ValidPropertyInfo,
    commentText:ValidPropertyInfo,
    readonly [key:string]:ValidPropertyInfo
}

export type DirectObject={
    textNode?:string
    tagName?:string
    attributes?:object
    content?:HtmlBase[]
    htmlCode?:string
    validator?:(content:any)=>boolean
    commentText?:string
    readonly [key:string]:any
}

export type PrintOpts={
    pretty?:boolean
    incomplete?:boolean
    title?:string
}

export type PrintRecurseOpts={
    margin?:number
}

export class HtmlBase{
    readonly [key:string]:any
    constructor(directObject:DirectObject, validProperties?:ValidPropertydProperty){
        /*jshint forin:false */
        for(var property in validProperties){
            /*jshint forin:true */
            var propertyDef=validProperties[property];
            var value=(propertyDef.transform||identity)(directObject[property]);
            if(!(property in directObject)){
                throw new Error('jsToHtml.Html error: directObject must include '+property);
            }
            for(var c=0; c<propertyDef.checks.length; c++){
                var check=propertyDef.checks[c];
                if(!check.check(value, directObject)){
                    throw new Error('jsToHtml.Html error: directObject '+property+' '+check.text);
                }
            }
        }
        /*jshint forin:false */
        for(property in directObject){
            /*jshint forin:true */
            if(!(property in validProperties)){
                throw new Error('jsToHtml.Html error: directObject not recognized '+property+' property');
            }
        }
    }
    private pattNonWordChar=new RegExp(/\W/)
    attributesMapToHtmlText(attributeMap:any, inner?:true):string{
        var esto = this;
        return Object.keys(attributeMap).map(function(attrName){
            var attrVal=attributeMap[attrName];
            if(attrVal==null || attrVal === false){
                return ''
            }
            if(attrName=='$attrs' && !inner){
                return esto.attributesMapToHtmlText(attrVal, true)
            }
            if(attrName=='$on' && !inner){
                throw new Error('listener can not be toHtmlTexted');
            }
            var textAttrVal=attrVal;
            var attrDefinition=htmlAttributes[attrName] || {listName:false};
            if(attrDefinition.listName && typeof attrVal!=="string"){
                textAttrVal=attrVal.join(' ');
            }
            var escapedAttrVal=escapeChar(textAttrVal);
            var quotingAttrVal=textAttrVal===''||esto.pattNonWordChar.test(textAttrVal)?'\''+escapedAttrVal+'\'':escapedAttrVal;
            return ' '+attrName+(attrVal === true?'':'='+quotingAttrVal);
        },this).join('');
    }
    attributesToHtmlText(){
        return this.attributesMapToHtmlText(this.attributes);
    }
    toHtmlText(opts:PrintOpts, recurseOpts:PrintRecurseOpts):string{
        throw new Error('must implement toHtmlText');
    }
    createNode():HTMLElement|Text|SVGElement{
        throw new Error('createNode not implemented')
    }
    create():HTMLElement|Text|SVGElement{
        throw new Error('create not implemented')
    }
}

export function arrayToHtmlText(listOfObjects:(string|HtmlBase)[], opts:PrintOpts, recurseOpts:PrintRecurseOpts){
    recurseOpts=recurseOpts||{margin:0};
    return listOfObjects.map(function(node){
        return (typeof node === "string"?html._text(node):node).toHtmlText(opts,recurseOpts);
    }).join('');
}

export class Html extends HtmlBase{
    tagName:string
    attributes:{[key:string]:any}
    content:HtmlBase[]
    constructor(directObject: DirectObject){
        super(directObject, validDirectProperties.tagName.properties)
        this.tagName=directObject.tagName
        this.attributes=directObject.attributes
        this.content=directObject.content
    }
    toHtmlText(opts?:PrintOpts, recurseOpts?:PrintRecurseOpts):string{
        opts=opts||{};
        recurseOpts=recurseOpts||{};
        recurseOpts.margin=recurseOpts.margin||0;
        var tagInfo=htmlTags[this.tagName];
        // var tagInfoFirstChild=(this.content instanceof Array && typeof this.content[0] == "object" && 'tagName' in this.content[0])?htmlTags[this.content[0].tagName]:{display:''}
        var tagInfoFirstChild:HtmlTagDef|{display:string}={display:''}
        if(this.content instanceof Array){
            var o=this.content[0]
            if(typeof o == "object"){
                if('tagName' in o){
                    tagInfoFirstChild=htmlTags[o.tagName]
                }
            }
        }
        var isvoidTag=tagInfo["void"]||false;
        var inlineBlock=((tagInfo.display||'inline')==='inline');
        var firstChildInline=(tagInfoFirstChild.display||'inline')!=='inline';
        var nl=(opts.pretty && !inlineBlock?'\n':'');
        var sp=(opts.pretty && !inlineBlock?spaces:function(){return ''; });
        return sp(recurseOpts.margin)+"<"+
            this.tagName+
            this.attributesToHtmlText()+
            ">"+(firstChildInline?nl:'')+
            this.contentToHtmlText(opts,recurseOpts)+
            (firstChildInline?sp(recurseOpts.margin):'')+
            (isvoidTag?'':"</"+this.tagName+">")+nl;

    }
    contentToHtmlText(opts:PrintOpts, recurseOpts:PrintRecurseOpts){
        return internalArrayToHtmlText(this.content,opts,{margin:recurseOpts.margin+2});
    }
    createNode(){
        var tagInfo=htmlTags[this.tagName];
        if(tagInfo.type=='SVG'){
            return document.createElementNS("http://www.w3.org/2000/svg",this.tagName);
        }
        return document.createElement(this.tagName);
    }
    create():HTMLElement|SVGElement{
        var element:HTMLElement|SVGElement = this.createNode();
        this.assignAttr(element, null, false);
        this.content.forEach(function(node){
            element.appendChild(node instanceof HtmlBase?node.create():node);
        });
        return element;
    }
    setOrResetAttribute(element:HTMLElement|SVGElement, attr:string, valueOrNull:null|string, testFirst:boolean){
        html.auditArrange?.('attr.mod', false);
        if(!testFirst || valueOrNull == null && element.hasAttribute(attr) || valueOrNull != element.getAttribute(attr)){
            html.auditArrange?.('attr.mod', true);
            if(valueOrNull!=null){
                element.setAttribute(attr,valueOrNull);
            }else{
                element.removeAttribute(attr);
            }
        }
    }
    assignAttr(element:HTMLElement|SVGElement, attributesMap:any, testFirst:boolean){
        let esto = this;
        let attributes = attributesMap || this.attributes;
        var tagInfo=htmlTags[this.tagName];
        Object.keys(attributes).map(function(attr){
            var value=attributes[attr];
            if(/-/.test(attr) || attributesMap || tagInfo.type=='SVG' && attr!='id'){
                esto.setOrResetAttribute(element, attr, value, testFirst);
            }else if(attr=='$attrs'){
                if(value != null){
                    esto.assignAttr(element, value, testFirst);
                }
            }else if(attr=='$on'){
                if(value != null){
                    // @ts-ignore
                    var $on=element.$on=element.$on||{};
                    for(var eventName in value){
                        html.auditArrange?.('attr.on', false);
                        if(!testFirst || $on[eventName] != value[eventName]){
                            html.auditArrange?.('attr.on', true);
                            if(eventName in $on){
                                element.removeEventListener(eventName, $on[eventName])
                            }
                            element.addEventListener(eventName, value[eventName])
                            $on[eventName]=value[eventName];
                            // element["on"+eventName] = value[eventName];
                        }
                    }
                }
            }else{
                var defAttr=htmlAttributes[attr];
                if(('listName' in defAttr) && (typeof value!=="string")){
                    Array.prototype.forEach.call(value,function(subValue:any){
                        html.auditArrange?.('attr.add', true);
                        // @ts-ignore
                        element[defAttr.listName].add(subValue);
                    });
                }else{
                    if(defAttr.noProperty) {
                        esto.setOrResetAttribute(element, defAttr.idl, value, testFirst);
                    }else{
                        // @ts-ignore // no le gusta indexar HTML
                        if(!testFirst || element[defAttr.idl] != value){
                            html.auditArrange?.('attr.set', true);
                            // @ts-ignore // no le gusta indexar HTML
                            element[defAttr.idl] = value;
                        }
                    }
                }
            }
        },this);
    }
    toHtmlDoc(opts:PrintOpts,recurseOpts:PrintRecurseOpts){
        opts = opts||{};
        var target:Html=this;
        if(!opts.incomplete){
            var source:Html=this;
            var head:HtmlBase;
            if(source.tagName==='html'){
                target=source;
            }else{
                target=html.html([source]);
            }
            if(!target.content.length){
                target.content.push(html.body());
            }
            var firstContent=target.content[0];
            if(firstContent instanceof Html && firstContent.tagName==='head'){
                head=firstContent;
            }else{
                head=html.head();
                target.content.unshift(head);
            }
            if(target.content[1].tagName!=='body'){
                target.content.shift();
                // var body=html.body([target.content[0]]);
                var body=html.body(target.content);
                target.content=[head, body];
            }
            var titles=head.content.filter(function(element:any){
                return (element as HTMLElement).tagName==='title';
            });
            if(titles.length>1){
                throw new Error("toHtmlDoc ERROR: multiple title");
            }else if(titles.length==1){
                if(opts.title){
                    throw new Error("toHtmlDoc ERROR: double title");
                }
            }else{
                var titleText = opts.title||html.defaultTitle;
                if(titleText){
                    head.content.unshift(html.title(titleText));
                }else if(html.mandatoryTitle){
                    throw new Error("toHtmlDoc ERROR: missing mandatory title");
                }
            }
        }
        return '<!doctype html>\n'+target.toHtmlText(opts,recurseOpts);
    }
}

export interface HtmlTag<T extends HTMLElement|SVGElement> extends Html{
    create():T
}

export class HtmlTextNode extends HtmlBase{
    textNode:string
    constructor(directObject:DirectObject){
        super(directObject, validDirectProperties.textNode.properties)
        this.textNode=directObject.textNode
    }
    toHtmlText(opts:PrintOpts, recurseOpts:PrintRecurseOpts){
        return escapeChar(this.textNode);
    }
    createNode(){
        return document.createTextNode(this.textNode);
    }
    create(){
        return this.createNode();
    }
}

export class HtmlDirectNode extends HtmlBase{
    htmlCode:string
    constructor(directObject:DirectObject){
        super(directObject, validDirectProperties.htmlCode.properties)
        this.htmlCode=directObject.htmlCode
    }
    toHtmlText(opts:PrintOpts, recurseOpts:PrintRecurseOpts){
        return this.htmlCode;
    }
}

export class HtmlComment extends HtmlBase{
    commentText:string
    constructor(directObject:DirectObject){
        super(directObject, validDirectProperties.commentText.properties)
        this.commentText=directObject.commentText
    }
    toHtmlText(opts:PrintOpts, recurseOpts:PrintRecurseOpts){
        return "<!--"+this.commentText+"-->";
    }
}

function internalArrayToHtmlText(listOfObjects:HtmlBase[], opts:PrintOpts, recurseOpts:PrintRecurseOpts){
    return listOfObjects.map(function(node){
        return node.toHtmlText(opts,recurseOpts);
    }).join('');
}

export function arrange(element:HTMLElement|SVGElement, oneObject:HtmlBase):void;
export function arrange(element:HTMLElement|SVGElement, listOfObjects:HtmlBase[]):void;
export function arrange(element:HTMLElement|SVGElement, listOfObjects:HtmlBase|HtmlBase[]):void{
    if(!(listOfObjects instanceof Array)){
        return arrange(element, [listOfObjects]);
    }
    // @ts-ignore
    var jsToHtmlArrange=element.jsToHtmlArrange=element.jsToHtmlArrange||{id:{}, position:{}, idSource:{}, positionSource:{}};
    var pending:Node[] = Array.prototype.slice.call(element.childNodes,0);
    listOfObjects.forEach(function(htmlElement, i){
        var id = htmlElement instanceof HTMLElement || htmlElement instanceof SVGElement ? htmlElement.id : (
            htmlElement instanceof HtmlTextNode ? null : htmlElement.attributes.id
        );
        var domElement = id && jsToHtmlArrange.id[id] || jsToHtmlArrange.position[i];
        var source =  id && jsToHtmlArrange.idSource[id] || jsToHtmlArrange.positionSource[i];
        if(!domElement || !(
            domElement instanceof Text && htmlElement instanceof HtmlTextNode ||
            'tagName' in domElement && 'tagName' in htmlElement && domElement.tagName.toLowerCase() == htmlElement.tagName
        ) ){
            var newElement;
            if(htmlElement instanceof HTMLElement || htmlElement instanceof SVGElement){
                html.auditArrange?.('existing', true);
                newElement=htmlElement;
            }else{
                html.auditArrange?.('creating', true);
                newElement=htmlElement.createNode();
            }
            if(id){
                jsToHtmlArrange.id[id]=newElement;
                jsToHtmlArrange.idSource[id]=htmlElement;
            }else{
                jsToHtmlArrange.position[i]=newElement;
                jsToHtmlArrange.positionSource[i]=htmlElement;
            }
            html.auditArrange?.('append', true);
            if(!domElement){
                element.appendChild(newElement);
            }else{
                element.insertBefore(newElement, domElement);
            }
            domElement = newElement;
        }else{
            var index = pending.indexOf(domElement);
            if(index >= 0){
                pending.splice(index, 1);
            }
        }
        if(!(htmlElement instanceof HTMLElement || htmlElement instanceof SVGElement)){
            if(domElement instanceof HTMLElement || domElement instanceof SVGElement){
                htmlElement.assignAttr(domElement);
                arrange(domElement, htmlElement.content)
                if(htmlElement.content.length==0 && domElement.childNodes.length){
                    domElement.innerHTML="";
                }
            }else if(domElement instanceof Text){
                html.auditArrange?.('textNode', false);
                if(domElement.textContent != htmlElement.textNode){
                    html.auditArrange?.('textNode', true);
                    domElement.textContent = htmlElement.textNode;
                }
            }
        }
    })
    pending.forEach(function(childToDelete:Node){
        html.auditArrange?.('deleting', true);
        element.removeChild(childToDelete);
    })
}

// https://www.typescriptlang.org/play/index.html#src=%0D%0Aclass%20X%20%7B%0D%0A%20%20%20%20constructor(public%20hola%3Astring)%7B%7D%0D%0A%20%20%20%20show()%20%7B%0D%0A%20%20%20%20%20%20%20%20alert(this.hola)%0D%0A%20%20%20%20%7D%0D%0A%0D%0A%7D%0D%0A%0D%0Aclass%20Y%20extends%20X%7B%0D%0A%20%20%20%20constructor(hola_che)%20%7B%0D%0A%20%20%20%20%20%20%20%20super(hola_che%2B%22%20che!%22)%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0Avar%20t%3Atypeof%20X%20%0D%0A%0D%0At%20%3D%20Y%0D%0A%0D%0Avar%20t1%20%3D%20%7B%0D%0A%20%20%20%20t2%3At%0D%0A%7D%0D%0A%0D%0Avar%20x%20%3D%20new%20t1.t2(%22hola%22))%3B%0D%0A%0D%0Ax.show()%3B
export function direct(directObject:DirectObject):HtmlBase{
    for(var mainAttr in validDirectProperties){
        if(mainAttr in directObject){
            return new validDirectProperties[mainAttr].classConstructor(directObject);
        }
    }
    throw new Error('js-to-html.direct error: invalid arguments to direct function');
};

var validDirectProperties:ValidProperties={
    textNode:{
        classConstructor:HtmlTextNode,
        properties:{
            textNode:{
                checks:[
                    {check:function(x){ return x!=null;}, text:"textNodes must not contains null"},
                    {check:couldDirectTextContent, text:"must be string or number"}
                ],
                transform:function(x){ return typeof x==="string" || x==null?x:''+x; }
            }
        }
    },
    tagName:{
        classConstructor:Html,
        properties:{
            tagName:{checks:[
                {check:function(x){ return typeof x==="string"; }, text:"must be a string"},
                {check:function(x){
                    if(!htmlTags[x]){
                        throw new Error("jsToHtml.Html error: directObject tagName "+x+" not exists");
                    }
                    return true;
                }}
            ]},
            attributes:{checks:[
                {check:function(attributes){ return isPlainObject(attributes); }, text:"must be a plain Object"},
                {check:function(attributes){
                    /*jshint forin:false */
                    for(var attrName in attributes){
                        /*jshint forin:true */
                        var attrValue=attributes[attrName];
                        if(attrValue==null){
                        }else if((attrName in htmlAttributes) && (htmlAttributes[attrName].rejectSpaces)){
                            var pattWhiteSpaces=new RegExp( "\\s");
                            if(pattWhiteSpaces.test(attrValue)){
                                throw new Error('js-to-html: ' + attrName + 'class attribute could not contain spaces. Use an array of attributes.');
                            }
                            if(attrValue instanceof Array){
                                attrValue = attrValue.join('');
                            }
                        }
                    }
                    return true;
                }},
                {check:function(attributes, o){
                    /*jshint forin:false */
                    for(var attrName in attributes){
                        /*jshint forin:true */
                        var attrInfo=htmlAttributes[attrName];
                        if(/-/.test(attrName) || attrName=='$on' || attrName=='$attrs'){
                            /*eslint no-empty: 0 */
                        }else if(!attrInfo){
                            throw new Error("inexistent attribute "+JSON.stringify(attrName));
                        }else{
                            if(!attrInfo.tags[o.tagName] && !attrInfo.tags["HTML elements"]){
                                throw new Error("attribute "+JSON.stringify(attrName)+" does not match with tagName "+JSON.stringify(o.tagName)+"");
                            }
                        }
                    }
                    return true;
                }},
                {check:function(attributes, o){
                    if (htmlTags[o.tagName].mandatoryTag) {
                        if (!attributes[htmlTags[o.tagName].mandatoryTag]) {
                            console.log('************', attributes, o, htmlTags[o.tagName].mandatoryTag, attributes[htmlTags[o.tagName].mandatoryTag])
                            throw new Error("lack of " + htmlTags[o.tagName].mandatoryTag + " in html." + o.tagName)
                        }
                    }
                    return true;
                }}
            ]},
            content:{checks:[
                {check:function(x){ return typeof x==="object" && x instanceof Array; }, text:"must be an Array"},
                {check:function(x,o){ return !htmlTags[o.tagName]["void"] || !x.length; }, text:"void elements must not have content"}
            ]},
        }
    },
    htmlCode:{
        classConstructor:HtmlDirectNode,
        properties:{
            htmlCode:{
                checks:[
                    {check:function(x){ return x!=null;}, text:"htmlCode must not contains null"},
                    {check:function(x){ return typeof x == "string"; }, text:"htmlCode must be a string"},
                    {check:function(){ return html.insecureModeEnabled; }, text:"insecure functions not allowed"},
                    {check:function(x,o){ return o.validator(x); }, text:"invalid htmlCode"}
                ]
            },
            validator:{
                checks:[
                    {check:function(x){ return x instanceof Function; }, text: "validator must be a function"}
                ]
            }
        },
    },
    commentText:{
        classConstructor:HtmlComment,
        properties:{
            commentText:{
                checks:[
                    {check:function(x){ return typeof x == "string"; }, text:"commentText must be a string"},
                    {check:function(x){ return !/-->/.test(x);}, text:"invalid text in comment"}
                ]
            }
        },
    }
};

function indirect(tagName:string,contentOrAttributes?:Content|object,contentIfThereAreAttributes?:Content){
    var attributes:object={};
    var content:Content=[];
    if(typeof contentOrAttributes=="object" && !(contentOrAttributes instanceof Array) ){
        if(contentOrAttributes!=null){
            if(!isPlainObject(contentOrAttributes)){
                throw new Error('jsToHtml.'+tagName+' expects plain object of attributes or array of content');
            }
            attributes=contentOrAttributes;
            content=contentIfThereAreAttributes;
        }
    }else{
        content = contentOrAttributes;
        if(arguments.length>3 || contentIfThereAreAttributes != null){
            throw new Error('jsToHtml.'+tagName+' ERROR: the first parameter is not an attribute object then must there no be a second parameter');
        }
    }
    return direct({
        tagName:tagName,
        attributes:attributes,
        content:(content instanceof Array?content:[content]).reduce(function(result, element){
            (element instanceof Array ? element : [element]).forEach(function(element){
                if(element!=null){
                    result.push(couldDirectTextContent(element)?direct({textNode:(element as string)}):(element as HtmlBase))
                }
            });
            return result;
        },[])
    });
};

export type HtmlTagDef={type:string, void?:boolean, display?:string, description:string, mandatoryTag?:string}
export type HtmlTags={
    readonly [key:string]:HtmlTagDef
}

// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
export let htmlTags:HtmlTags={
    "a"            :{type:'HTML4', description:"Defines a hyperlink"},
    "abbr"         :{type:'HTML4', description:"Defines an abbreviation"},
    "acronym"      :{type:'HTML4', description:"Not supported in HTML5. Defines an acronym"},
    "address"      :{type:'HTML4', description:"Defines contact information for the author/owner of a document"},
    "applet"       :{type:'HTML4', description:"Not supported in HTML5. Deprecated in HTML 4.01. Defines an embedded applet"},
    "area"         :{type:'HTML4', "void":true, description:"Defines an area inside an image-map"},
    "article"      :{type:'HTML5', description:"Defines an article"},
    "aside"        :{type:'HTML5', description:"Defines content aside from the page content"},
    "audio"        :{type:'HTML5', description:"Defines sound content"},
    "b"            :{type:'HTML4', description:"Defines bold text"},
    "base"         :{type:'HTML4', "void":true, description:"Specifies the base URL/target for all relative URLs in a document"},
    "basefont"     :{type:'HTML4', description:"Not supported in HTML5. Deprecated in HTML 4.01. Specifies a default color, size, and font for all text in a document"},
    "bdi"          :{type:'HTML5', description:"Isolates a part of text that might be formatted in a different direction from other text outside it"},
    "bdo"          :{type:'HTML4', description:"Overrides the current text direction"},
    "big"          :{type:'HTML4', description:"Not supported in HTML5. Defines big text"},
    "blockquote"   :{type:'HTML4', description:"Defines a section that is quoted from another source"},
    "body"         :{type:'HTML4', description:"Defines the document's body"},
    "br"           :{type:'HTML4', "void":true, description:"Defines a single line break"},
    "button"       :{type:'HTML4', description:"Defines a clickable button"},
    "canvas"       :{type:'HTML5', description:"Used to draw graphics, on the fly, via scripting (usually JavaScript)"},
    "caption"      :{type:'HTML4', display:'not-inline', description:"Defines a table caption"},
    "center"       :{type:'HTML4', description:"Not supported in HTML5. Deprecated in HTML 4.01. Defines centered text"},
    "cite"         :{type:'HTML4', description:"Defines the title of a work"},
    "code"         :{type:'HTML4', description:"Defines a piece of computer code"},
    "col"          :{type:'HTML4', display:'not-inline', "void":true, description:"Specifies column properties for each column within a <colgroup> element "},
    "colgroup"     :{type:'HTML4', display:'not-inline', description:"Specifies a group of one or more columns in a table for formatting"},
    "command"      :{type:'HTML5', "void":true, description:"Defines a command button that a user can invoke"},
    "datalist"     :{type:'HTML5', description:"Specifies a list of pre-defined options for input controls"},
    "dd"           :{type:'HTML4', description:"Defines a description of an item in a definition list"},
    "del"          :{type:'HTML4', description:"Defines text that has been deleted from a document"},
    "details"      :{type:'HTML5', description:"Defines additional details that the user can view or hide"},
    "dfn"          :{type:'HTML4', description:"Defines a definition term"},
    "dialog"       :{type:'HTML5', description:"Defines a dialog box or window"},
    "dir"          :{type:'HTML4', description:"Not supported in HTML5. Deprecated in HTML 4.01. Defines a directory list"},
    "div"          :{type:'HTML4', display:'block', description:"Defines a section in a document"},
    "dl"           :{type:'HTML4', description:"Defines a definition list"},
    "dt"           :{type:'HTML4', description:"Defines a term (an item) in a definition list"},
    "em"           :{type:'HTML4', description:"Defines emphasized text "},
    "embed"        :{type:'HTML5', "void":true, description:"Defines a container for an external (non-HTML) application"},
    "fieldset"     :{type:'HTML4', description:"Groups related elements in a form"},
    "figcaption"   :{type:'HTML5', description:"Defines a caption for a <figure> element"},
    "figure"       :{type:'HTML5', description:"Specifies self-contained content"},
    "font"         :{type:'HTML4', description:"Not supported in HTML5. Deprecated in HTML 4.01. Defines font, color, and size for text"},
    "footer"       :{type:'HTML5', description:"Defines a footer for a document or section"},
    "form"         :{type:'HTML4', description:"Defines an HTML form for user input"},
    "frame"        :{type:'HTML4', description:"Not supported in HTML5. Defines a window (a frame) in a frameset"},
    "frameset"     :{type:'HTML4', description:"Not supported in HTML5. Defines a set of frames"},
    "h1"           :{type:'HTML4', display:'block', description:" Defines HTML headings level 1"},
    "h2"           :{type:'HTML4', display:'block', description:" Defines HTML headings level 2"},
    "h3"           :{type:'HTML4', display:'block', description:" Defines HTML headings level 3"},
    "h4"           :{type:'HTML4', display:'block', description:" Defines HTML headings level 4"},
    "h5"           :{type:'HTML4', display:'block', description:" Defines HTML headings level 5"},
    "h6"           :{type:'HTML4', display:'block', description:" Defines HTML headings level 6"},
    "head"         :{type:'HTML4', description:"Defines information about the document"},
    "header"       :{type:'HTML5', description:"Defines a header for a document or section"},
    "hgroup"       :{type:'HTML5', description:"Groups heading ( <h1> to <h6>) elements"},
    "hr"           :{type:'HTML4', "void":true, description:" Defines a thematic change in the content"},
    "html"         :{type:'HTML4', description:"Defines the root of an HTML document"},
    "i"            :{type:'HTML4', description:"Defines a part of text in an alternate voice or mood"},
    "iframe"       :{type:'HTML4', description:"Defines an inline frame"},
    "img"          :{type:'HTML4', "void":true, description:"Defines an image"},
    "input"        :{type:'HTML4', "void":true, description:"Defines an input control"},
    "ins"          :{type:'HTML4', description:"Defines a text that has been inserted into a document"},
    "kbd"          :{type:'HTML4', description:"Defines keyboard input"},
    "keygen"       :{type:'HTML5', description:"Defines a key-pair generator field (for forms)"},
    "label"        :{type:'HTML4', description:"Defines a label for an <input> element"},
    "legend"       :{type:'HTML4', description:"Defines a caption for a <fieldset>, <figure>, or <details> element"},
    "li"           :{type:'HTML4', description:"Defines a list item"},
    "link"         :{type:'HTML4', "void":true, description:"Defines the relationship between a document and an external resource (most used to link to style sheets)"},
    "main"         :{type:'HTML5', description:"Specifies the main content of a document"},
    "map"          :{type:'HTML4', description:"Defines a client-side image-map"},
    "mark"         :{type:'HTML5', description:"Defines marked/highlighted text"},
    "menu"         :{type:'HTML4', description:"Defines a list/menu of commands"},
    "meta"         :{type:'HTML4', "void":true, description:"Defines metadata about an HTML document"},
    "meter"        :{type:'HTML5', description:"Defines a scalar measurement within a known range (a gauge)"},
    "nav"          :{type:'HTML5', description:"Defines navigation links"},
    "noframes"     :{type:'HTML4', description:"Not supported in HTML5. Defines an alternate content for users that do not support frames"},
    "noscript"     :{type:'HTML4', description:"Defines an alternate content for users that do not support client-side scripts"},
    "object"       :{type:'HTML4', description:"Defines an embedded object"},
    "ol"           :{type:'HTML4', description:"Defines an ordered list"},
    "optgroup"     :{type:'HTML4', description:"Defines a group of related options in a drop-down list"},
    "option"       :{type:'HTML4', description:"Defines an option in a drop-down list"},
    "output"       :{type:'HTML5', description:"Defines the result of a calculation"},
    "p"            :{type:'HTML4', display:'block', description:"Defines a paragraph"},
    "param"        :{type:'HTML4', "void":true, description:"Defines a parameter for an object"},
    "pre"          :{type:'HTML4', description:"Defines preformatted text"},
    "progress"     :{type:'HTML5', description:"Represents the progress of a task"},
    "q"            :{type:'HTML4', description:"Defines a short quotation"},
    "rp"           :{type:'HTML5', description:"Defines what to show in browsers that do not support ruby annotations"},
    "rt"           :{type:'HTML5', description:"Defines an explanation/pronunciation of characters (for East Asian typography)"},
    "ruby"         :{type:'HTML5', description:"Defines a ruby annotation (for East Asian typography)"},
    "s"            :{type:'HTML4', description:"Defines text that is no longer correct"},
    "samp"         :{type:'HTML4', description:"Defines sample output from a computer program"},
    "script"       :{type:'HTML4', mandatoryTag:"src", description:"Defines a client-side script"},
    "section"      :{type:'HTML5', description:"Defines a section in a document"},
    "select"       :{type:'HTML4', description:"Defines a drop-down list"},
    "small"        :{type:'HTML4', description:"Defines smaller text"},
    "source"       :{type:'HTML5', "void":true, description:"Defines multiple media resources for media elements (<video> and <audio>)"},
    "span"         :{type:'HTML4', description:"Defines a section in a document"},
    "strike"       :{type:'HTML4', description:"Not supported in HTML5. Deprecated in HTML 4.01. Defines strikethrough text"},
    "strong"       :{type:'HTML4', description:"Defines important text"},
    "style"        :{type:'HTML4', description:"Defines style information for a document"},
    "sub"          :{type:'HTML4', description:"Defines subscripted text"},
    "summary"      :{type:'HTML5', description:"Defines a visible heading for a <details> element"},
    "sup"          :{type:'HTML4', description:"Defines superscripted text"},
    "svg"          :{type:'SVG'  , description:"SVG"},
    "table"        :{type:'HTML4', display:'not-inline', description:"Defines a table"},
    "tbody"        :{type:'HTML4', display:'not-inline', description:"Groups the body content in a table"},
    "td"           :{type:'HTML4', display:'not-inline', description:"Defines a cell in a table"},
    "textarea"     :{type:'HTML4', description:"Defines a multiline input control (text area)"},
    "tfoot"        :{type:'HTML4', display:'not-inline', description:"Groups the footer content in a table"},
    "th"           :{type:'HTML4', display:'not-inline', description:"Defines a header cell in a table"},
    "thead"        :{type:'HTML4', display:'not-inline', description:"Groups the header content in a table"},
    "time"         :{type:'HTML5', description:"Defines a date/time"},
    "title"        :{type:'HTML4', description:"Defines a title for the document"},
    "tr"           :{type:'HTML4', display:'not-inline', description:"Defines a row in a table"},
    "track"        :{type:'HTML5', description:"Defines text tracks for media elements (<video> and <audio>)"},
    "tt"           :{type:'HTML4', description:"Not supported in HTML5. Defines teletype text"},
    "u"            :{type:'HTML4', description:"Defines text that should be stylistically different from normal text"},
    "ul"           :{type:'HTML4', description:"Defines an unordered list"},
    "var"          :{type:'HTML4', description:"Defines a variable"},
    "video"        :{type:'HTML5', description:"Defines a video or movie"},
    "wbr"          :{type:'HTML5', description:"Defines a possible line-break"},
    "path"         :{type:'SVG'  , description:"SVG path"}
};

export type HtmlAttributes={
    [key:string]:{
        tags:{
            [key:string]:{description:string, value:string}
        }
        idl:string
        listName?:string
        rejectSpaces?:boolean
        reserved?:boolean
        noProperty?:boolean
    }
}

//
// generated by generators/attributes.js
export let htmlAttributes:HtmlAttributes={
    "abbr": {
        "tags": {
            "th": {"description": "Alternative label to use for the header cell when referencing the cell in other contexts","value": "Text*"}
        },
        "idl": "abbr"
    },
    "accept": {
        "tags": {
            "input": {"description": "Hint for expected file type in file upload controls","value": "Set of comma-separated tokens* consisting of valid MIME types with no parameters or audio/*, video/*, or image/*"}
        },
        "idl": "accept"
    },
    "accept-charset": {
        "tags": {
            "form": {"description": "Character encodings to use for form submission","value": "Ordered set of unique space-separated tokens, ASCII case-insensitive, consisting of labels of ASCII-compatible encodings*"}
        },
        "idl": "accept-charset"
    },
    "accesskey": {
        "tags": {
            "HTML elements": {"description": "Keyboard shortcut to activate or focus element","value": "Ordered set of unique space-separated tokens, case-sensitive, consisting of one Unicode code point in length"}
        },
        "idl": "accessKey"
    },
    "action": {
        "tags": {
            "form": {"description": "URL to use for form submission","value": "Valid non-empty URL potentially surrounded by spaces"}
        },
        "idl": "action"
    },
    "allowfullscreen": {
        "tags": {
            "iframe": {"description": "Whether to allow the iframe's contents to use requestFullscreen()","value": "Boolean attribute"}
        },
        "idl": "allowfullscreen"
    },
    "alt": {
        "tags": {
            "area": {"description": "Replacement text for use when images are not available","value": "Text*"},
            "img": {"description": "Replacement text for use when images are not available","value": "Text*"},
            "input": {"description": "Replacement text for use when images are not available","value": "Text*"}
        },
        "idl": "alt"
    },
    "async": {
        "tags": {
            "script": {"description": "Execute script when available, without blocking","value": "Boolean attribute"}
        },
        "idl": "async"
    },
    "autocomplete": {
        "tags": {
            "form": {"description": "Default setting for autofill feature for controls in the form","value": "\"on\"; \"off\""},
            "input": {"description": "Hint for form autofill feature","value": "Autofill field name and related tokens*"},
            "select": {"description": "Hint for form autofill feature","value": "Autofill field name and related tokens*"},
            "textarea": {"description": "Hint for form autofill feature","value": "Autofill field name and related tokens*"}
        },
        "idl": "autocomplete"
    },
    "autofocus": {
        "tags": {
            "button": {"description": "Automatically focus the form control when the page is loaded","value": "Boolean attribute"},
            "input": {"description": "Automatically focus the form control when the page is loaded","value": "Boolean attribute"},
            "keygen": {"description": "Automatically focus the form control when the page is loaded","value": "Boolean attribute"},
            "select": {"description": "Automatically focus the form control when the page is loaded","value": "Boolean attribute"},
            "textarea": {"description": "Automatically focus the form control when the page is loaded","value": "Boolean attribute"}
        },
        "idl": "autofocus"
    },
    "autoplay": {
        "tags": {
            "audio": {"description": "Hint that the media resource can be started automatically when the page is loaded","value": "Boolean attribute"},
            "video": {"description": "Hint that the media resource can be started automatically when the page is loaded","value": "Boolean attribute"}
        },
        "idl": "autoplay"
    },
    "challenge": {
        "tags": {
            "keygen": {"description": "String to package with the generated and signed public key","value": "Text"}
        },
        "idl": "challenge"
    },
    "charset": {
        "tags": {
            "meta": {"description": "Character encoding declaration","value": "Encoding label*"},
            "script": {"description": "Character encoding of the external script resource","value": "Encoding label*"}
        },
        "idl": "charset"
    },
    "checked": {
        "tags": {
            "menuitem": {"description": "Whether the command or control is checked","value": "Boolean attribute"},
            "input": {"description": "Whether the command or control is checked","value": "Boolean attribute"}
        },
        "idl": "defaultChecked" // ERROR
    },
    "cite": {
        "tags": {
            "blockquote": {"description": "Link to the source of the quotation or more information about the edit","value": "Valid URL potentially surrounded by spaces"},
            "del": {"description": "Link to the source of the quotation or more information about the edit","value": "Valid URL potentially surrounded by spaces"},
            "ins": {"description": "Link to the source of the quotation or more information about the edit","value": "Valid URL potentially surrounded by spaces"},
            "q": {"description": "Link to the source of the quotation or more information about the edit","value": "Valid URL potentially surrounded by spaces"}
        },
        "idl": "cite"
    },
    "class": {
        "tags": {
            "HTML elements": {"description": "Classes to which the element belongs","value": "Set of space-separated tokens"}
        },
        "idl": "className",
        "rejectSpaces": false,
        "listName": "classList",
        "reserved": true
    },
    "cols": {
        "tags": {
            "textarea": {"description": "Maximum number of characters per line","value": "Valid non-negative integer greater than zero"}
        },
        "idl": "cols"
    },
    "colspan": {
        "tags": {
            "td": {"description": "Number of columns that the cell is to span","value": "Valid non-negative integer greater than zero"},
            "th": {"description": "Number of columns that the cell is to span","value": "Valid non-negative integer greater than zero"}
        },
        "idl": "colSpan"
    },
    "content": {
        "tags": {
            "meta": {"description": "Value of the element","value": "Text*"}
        },
        "idl": "content"
    },
    "contenteditable": {
        "tags": {
            "HTML elements": {"description": "Whether the element is editable","value": "\"true\"; \"false\""}
        },
        "idl": "contenteditable"
    },
    "contextmenu": {
        "tags": {
            "HTML elements": {"description": "The element's context menu","value": "ID*"}
        },
        "idl": "contextmenu"
    },
    "controls": {
        "tags": {
            "audio": {"description": "Show user agent controls","value": "Boolean attribute"},
            "video": {"description": "Show user agent controls","value": "Boolean attribute"}
        },
        "idl": "controls"
    },
    "coords": {
        "tags": {
            "area": {"description": "Coordinates for the shape to be created in an image map","value": "Valid list of integers*"}
        },
        "idl": "coords"
    },
    "crossorigin": {
        "tags": {
            "audio": {"description": "How the element handles crossorigin requests","value": "\"anonymous\"; \"use-credentials\""},
            "img": {"description": "How the element handles crossorigin requests","value": "\"anonymous\"; \"use-credentials\""},
            "link": {"description": "How the element handles crossorigin requests","value": "\"anonymous\"; \"use-credentials\""},
            "script": {"description": "How the element handles crossorigin requests","value": "\"anonymous\"; \"use-credentials\""},
            "video": {"description": "How the element handles crossorigin requests","value": "\"anonymous\"; \"use-credentials\""}
        },
        "idl": "crossorigin"
    },
    "data": {
        "tags": {
            "object": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"}
        },
        "idl": "data"
    },
    "datetime": {
        "tags": {
            "del": {"description": "Date and (optionally) time of the change","value": "Valid date string with optional time"},
            "ins": {"description": "Date and (optionally) time of the change","value": "Valid date string with optional time"},
            "time": {"description": "Machine-readable value","value": "Valid month string, valid date string, valid yearless date string, valid time string, valid local date and time string, valid time-zone offset string, valid global date and time string, valid week string, valid non-negative integer, or valid duration string"}
        },
        "idl": "dateTime"
    },
    "default": {
        "tags": {
            "menuitem": {"description": "Mark the command as being a default command","value": "Boolean attribute"},
            "track": {"description": "Enable the track if no other text track is more suitable","value": "Boolean attribute"}
        },
        "idl": "default"
    },
    "defer": {
        "tags": {
            "script": {"description": "Defer script execution","value": "Boolean attribute"}
        },
        "idl": "defer"
    },
    "dir": {
        "tags": {
            "HTML elements": {"description": "The text directionality of the element","value": "\"ltr\"; \"rtl\"; \"auto\""},
            "bdo": {"description": "The text directionality of the element","value": "\"ltr\"; \"rtl\""}
        },
        "idl": "dir"
    },
    "dirname": {
        "tags": {
            "input": {"description": "Name of form field to use for sending the element's directionality in form submission","value": "Text*"},
            "textarea": {"description": "Name of form field to use for sending the element's directionality in form submission","value": "Text*"}
        },
        "idl": "dirname"
    },
    "disabled": {
        "tags": {
            "button": {"description": "Whether the form control is disabled","value": "Boolean attribute"},
            "menuitem": {"description": "Whether the form control is disabled","value": "Boolean attribute"},
            "fieldset": {"description": "Whether the form control is disabled","value": "Boolean attribute"},
            "input": {"description": "Whether the form control is disabled","value": "Boolean attribute"},
            "keygen": {"description": "Whether the form control is disabled","value": "Boolean attribute"},
            "optgroup": {"description": "Whether the form control is disabled","value": "Boolean attribute"},
            "option": {"description": "Whether the form control is disabled","value": "Boolean attribute"},
            "select": {"description": "Whether the form control is disabled","value": "Boolean attribute"},
            "textarea": {"description": "Whether the form control is disabled","value": "Boolean attribute"}
        },
        "idl": "disabled"
    },
    "download": {
        "tags": {
            "a": {"description": "Whether to download the resource instead of navigating to it, and its file name if so","value": "Text"},
            "area": {"description": "Whether to download the resource instead of navigating to it, and its file name if so","value": "Text"}
        },
        "idl": "download"
    },
    "draggable": {
        "tags": {
            "HTML elements": {"description": "Whether the element is draggable","value": "\"true\"; \"false\""}
        },
        "idl": "draggable"
    },
    "dropzone": {
        "tags": {
            "HTML elements": {"description": "Accepted item types for drag-and-drop","value": "Unordered set of unique space-separated tokens, ASCII case-insensitive, consisting of accepted types and drag feedback*"}
        },
        "idl": "dropzone"
    },
    "enctype": {
        "tags": {
            "form": {"description": "Form data set encoding type to use for form submission","value": "\"application/x-www-form-urlencoded\"; \"multipart/form-data\"; \"text/plain\""}
        },
        "idl": "enctype"
    },
    "for": {
        "tags": {
            "label": {"description": "Associate the label with form control","value": "ID*"},
            "output": {"description": "Specifies controls from which the output was calculated","value": "Unordered set of unique space-separated tokens, case-sensitive, consisting of IDs*"}
        },
        "idl": "htmlFor",
        "reserved": true
    },
    "form": {
        "tags": {
            "button": {"description": "Associates the control with a form element","value": "ID*"},
            "fieldset": {"description": "Associates the control with a form element","value": "ID*"},
            "input": {"description": "Associates the control with a form element","value": "ID*"},
            "keygen": {"description": "Associates the control with a form element","value": "ID*"},
            "label": {"description": "Associates the control with a form element","value": "ID*"},
            "object": {"description": "Associates the control with a form element","value": "ID*"},
            "output": {"description": "Associates the control with a form element","value": "ID*"},
            "select": {"description": "Associates the control with a form element","value": "ID*"},
            "textarea": {"description": "Associates the control with a form element","value": "ID*"}
        },
        "idl": "form"
    },
    "formaction": {
        "tags": {
            "button": {"description": "URL to use for form submission","value": "Valid non-empty URL potentially surrounded by spaces"},
            "input": {"description": "URL to use for form submission","value": "Valid non-empty URL potentially surrounded by spaces"}
        },
        "idl": "formaction"
    },
    "formenctype": {
        "tags": {
            "button": {"description": "Form data set encoding type to use for form submission","value": "\"application/x-www-form-urlencoded\"; \"multipart/form-data\"; \"text/plain\""},
            "input": {"description": "Form data set encoding type to use for form submission","value": "\"application/x-www-form-urlencoded\"; \"multipart/form-data\"; \"text/plain\""}
        },
        "idl": "formenctype"
    },
    "formmethod": {
        "tags": {
            "button": {"description": "HTTP method to use for form submission","value": "\"GET\"; \"POST\""},
            "input": {"description": "HTTP method to use for form submission","value": "\"GET\"; \"POST\""}
        },
        "idl": "formmethod"
    },
    "formnovalidate": {
        "tags": {
            "button": {"description": "Bypass form control validation for form submission","value": "Boolean attribute"},
            "input": {"description": "Bypass form control validation for form submission","value": "Boolean attribute"}
        },
        "idl": "formnovalidate"
    },
    "formtarget": {
        "tags": {
            "button": {"description": "Browsing context for form submission","value": "Valid browsing context name or keyword"},
            "input": {"description": "Browsing context for form submission","value": "Valid browsing context name or keyword"}
        },
        "idl": "formtarget"
    },
    "headers": {
        "tags": {
            "td": {"description": "The header cells for this cell","value": "Unordered set of unique space-separated tokens, case-sensitive, consisting of IDs*"},
            "th": {"description": "The header cells for this cell","value": "Unordered set of unique space-separated tokens, case-sensitive, consisting of IDs*"}
        },
        "idl": "headers"
    },
    "height": {
        "tags": {
            "canvas": {"description": "Vertical dimension","value": "Valid non-negative integer"},
            "embed": {"description": "Vertical dimension","value": "Valid non-negative integer"},
            "iframe": {"description": "Vertical dimension","value": "Valid non-negative integer"},
            "img": {"description": "Vertical dimension","value": "Valid non-negative integer"},
            "input": {"description": "Vertical dimension","value": "Valid non-negative integer"},
            "object": {"description": "Vertical dimension","value": "Valid non-negative integer"},
            "video": {"description": "Vertical dimension","value": "Valid non-negative integer"}
        },
        "idl": "height"
    },
    "hidden": {
        "tags": {
            "HTML elements": {"description": "Whether the element is relevant","value": "Boolean attribute"}
        },
        "idl": "hidden"
    },
    "high": {
        "tags": {
            "meter": {"description": "Low limit of high range","value": "Valid floating-point number*"}
        },
        "idl": "high"
    },
    "href": {
        "tags": {
            "a": {"description": "Address of the hyperlink","value": "Valid URL potentially surrounded by spaces"},
            "area": {"description": "Address of the hyperlink","value": "Valid URL potentially surrounded by spaces"},
            "link": {"description": "Address of the hyperlink","value": "Valid non-empty URL potentially surrounded by spaces"},
            "base": {"description": "Document base URL","value": "Valid URL potentially surrounded by spaces"}
        },
        "idl": "href"
    },
    "hreflang": {
        "tags": {
            "a": {"description": "Language of the linked resource","value": "Valid BCP 47 language tag"},
            "link": {"description": "Language of the linked resource","value": "Valid BCP 47 language tag"}
        },
        "idl": "hreflang"
    },
    "http-equiv": {
        "tags": {
            "meta": {"description": "Pragma directive","value": "Text*"}
        },
        "idl": "http-equiv"
    },
    "icon": {
        "tags": {
            "menuitem": {"description": "Icon for the command","value": "Valid non-empty URL potentially surrounded by spaces"}
        },
        "idl": "icon"
    },
    "id": {
        "tags": {
            "HTML elements": {"description": "The element's ID","value": "Text*"}
        },
        "idl": "id"
    },
    "inputmode": {
        "tags": {
            "input": {"description": "Hint for selecting an input modality","value": "\"verbatim\"; \"latin\"; \"latin-name\"; \"latin-prose\"; \"full-width-latin\"; \"kana\"; \"kana-name\"; \"katakana\"; \"numeric\"; \"tel\"; \"email\"; \"url\""},
            "textarea": {"description": "Hint for selecting an input modality","value": "\"verbatim\"; \"latin\"; \"latin-name\"; \"latin-prose\"; \"full-width-latin\"; \"kana\"; \"kana-name\"; \"katakana\"; \"numeric\"; \"tel\"; \"email\"; \"url\""}
        },
        "idl": "inputmode"
    },
    "ismap": {
        "tags": {
            "img": {"description": "Whether the image is a server-side image map","value": "Boolean attribute"}
        },
        "idl": "ismap"
    },
    "itemid": {
        "tags": {
            "HTML elements": {"description": "Global identifier for a microdata item","value": "Valid URL potentially surrounded by spaces"}
        },
        "idl": "itemid"
    },
    "itemprop": {
        "tags": {
            "HTML elements": {"description": "Property names of a microdata item","value": "Unordered set of unique space-separated tokens, case-sensitive, consisting of valid absolute URLs, defined property names, or text*"}
        },
        "idl": "itemprop"
    },
    "itemref": {
        "tags": {
            "HTML elements": {"description": "Referenced elements","value": "Unordered set of unique space-separated tokens, case-sensitive, consisting of IDs*"}
        },
        "idl": "itemref"
    },
    "itemscope": {
        "tags": {
            "HTML elements": {"description": "Introduces a microdata item","value": "Boolean attribute"}
        },
        "idl": "itemscope"
    },
    "itemtype": {
        "tags": {
            "HTML elements": {"description": "Item types of a microdata item","value": "Unordered set of unique space-separated tokens, case-sensitive, consisting of valid absolute URL*"}
        },
        "idl": "itemtype"
    },
    "keytype": {
        "tags": {
            "keygen": {"description": "The type of cryptographic key to generate","value": "Text*"}
        },
        "idl": "keytype"
    },
    "kind": {
        "tags": {
            "track": {"description": "The type of text track","value": "\"subtitles\"; \"captions\"; \"descriptions\"; \"chapters\"; \"metadata\""}
        },
        "idl": "kind"
    },
    "label": {
        "tags": {
            "menuitem": {"description": "User-visible label","value": "Text"},
            "menu": {"description": "User-visible label","value": "Text"},
            "optgroup": {"description": "User-visible label","value": "Text"},
            "option": {"description": "User-visible label","value": "Text"},
            "track": {"description": "User-visible label","value": "Text"}
        },
        "idl": "label"
    },
    "lang": {
        "tags": {
            "HTML elements": {"description": "Language of the element","value": "Valid BCP 47 language tag or the empty string"}
        },
        "idl": "lang"
    },
    "list": {
        "tags": {
            "input": {"description": "List of autocomplete options","value": "ID*"}
        },
        "idl": "list",
        "noProperty": true
    },
    "loop": {
        "tags": {
            "audio": {"description": "Whether to loop the media resource","value": "Boolean attribute"},
            "video": {"description": "Whether to loop the media resource","value": "Boolean attribute"}
        },
        "idl": "loop"
    },
    "low": {
        "tags": {
            "meter": {"description": "High limit of low range","value": "Valid floating-point number*"}
        },
        "idl": "low"
    },
    "manifest": {
        "tags": {
            "html": {"description": "Application cache manifest","value": "Valid non-empty URL potentially surrounded by spaces"}
        },
        "idl": "manifest"
    },
    "max": {
        "tags": {
            "input": {"description": "Maximum value","value": "Varies*"},
            "meter": {"description": "Upper bound of range","value": "Valid floating-point number*"},
            "progress": {"description": "Upper bound of range","value": "Valid floating-point number*"}
        },
        "idl": "max"
    },
    "maxlength": {
        "tags": {
            "input": {"description": "Maximum length of value","value": "Valid non-negative integer"},
            "textarea": {"description": "Maximum length of value","value": "Valid non-negative integer"}
        },
        "idl": "maxLength"
    },
    "media": {
        "tags": {
            "link": {"description": "Applicable media","value": "Valid media query list"},
            "style": {"description": "Applicable media","value": "Valid media query list"}
        },
        "idl": "media"
    },
    "mediagroup": {
        "tags": {
            "audio": {"description": "Groups media elements together with an implicit MediaController","value": "Text"},
            "video": {"description": "Groups media elements together with an implicit MediaController","value": "Text"}
        },
        "idl": "mediagroup"
    },
    "menu": {
        "tags": {
            "button": {"description": "Specifies the element's designated pop-up menu","value": "ID*"}
        },
        "idl": "menu"
    },
    "method": {
        "tags": {
            "form": {"description": "HTTP method to use for form submission","value": "\"GET\"; \"POST\"; \"dialog\""}
        },
        "idl": "method"
    },
    "min": {
        "tags": {
            "input": {"description": "Minimum value","value": "Varies*"},
            "meter": {"description": "Lower bound of range","value": "Valid floating-point number*"}
        },
        "idl": "min"
    },
    "minlength": {
        "tags": {
            "input": {"description": "Minimum length of value","value": "Valid non-negative integer"},
            "textarea": {"description": "Minimum length of value","value": "Valid non-negative integer"}
        },
        "idl": "minlength"
    },
    "multiple": {
        "tags": {
            "input": {"description": "Whether to allow multiple values","value": "Boolean attribute"},
            "select": {"description": "Whether to allow multiple values","value": "Boolean attribute"}
        },
        "idl": "multiple"
    },
    "muted": {
        "tags": {
            "audio": {"description": "Whether to mute the media resource by default","value": "Boolean attribute"},
            "video": {"description": "Whether to mute the media resource by default","value": "Boolean attribute"}
        },
        "idl": "muted"
    },
    "name": {
        "tags": {
            "button": {"description": "Name of form control to use for form submission and in the form.elements API","value": "Text*"},
            "fieldset": {"description": "Name of form control to use for form submission and in the form.elements API","value": "Text*"},
            "input": {"description": "Name of form control to use for form submission and in the form.elements API","value": "Text*"},
            "keygen": {"description": "Name of form control to use for form submission and in the form.elements API","value": "Text*"},
            "output": {"description": "Name of form control to use for form submission and in the form.elements API","value": "Text*"},
            "select": {"description": "Name of form control to use for form submission and in the form.elements API","value": "Text*"},
            "textarea": {"description": "Name of form control to use for form submission and in the form.elements API","value": "Text*"},
            "form": {"description": "Name of form to use in the document.forms API","value": "Text*"},
            "iframe": {"description": "Name of nested browsing context","value": "Valid browsing context name or keyword"},
            "object": {"description": "Name of nested browsing context","value": "Valid browsing context name or keyword"},
            "map": {"description": "Name of image map to reference from the usemap attribute","value": "Text*"},
            "meta": {"description": "Metadata name","value": "Text*"},
            "param": {"description": "Name of parameter","value": "Text"}
        },
        "idl": "name"
    },
    "nonce": {
        "tags": {
            "script": {"description": "Cryptographic nonce used in Content Security Policy checks [CSP]","value": "Text"},
            "style": {"description": "Cryptographic nonce used in Content Security Policy checks [CSP]","value": "Text"}
        },
        "idl": "nonce"
    },
    "novalidate": {
        "tags": {
            "form": {"description": "Bypass form control validation for form submission","value": "Boolean attribute"}
        },
        "idl": "novalidate"
    },
    "open": {
        "tags": {
            "details": {"description": "Whether the details are visible","value": "Boolean attribute"},
            "dialog": {"description": "Whether the dialog box is showing","value": "Boolean attribute"}
        },
        "idl": "open"
    },
    "optimum": {
        "tags": {
            "meter": {"description": "Optimum value in gauge","value": "Valid floating-point number*"}
        },
        "idl": "optimum"
    },
    "pattern": {
        "tags": {
            "input": {"description": "Pattern to be matched by the form control's value","value": "Regular expression matching the JavaScript Pattern production"}
        },
        "idl": "pattern"
    },
    "ping": {
        "tags": {
            "a": {"description": "URLs to ping","value": "Set of space-separated tokens consisting of valid non-empty URLs"},
            "area": {"description": "URLs to ping","value": "Set of space-separated tokens consisting of valid non-empty URLs"}
        },
        "idl": "ping"
    },
    "placeholder": {
        "tags": {
            "input": {"description": "User-visible label to be placed within the form control","value": "Text*"},
            "textarea": {"description": "User-visible label to be placed within the form control","value": "Text*"}
        },
        "idl": "placeholder"
    },
    "poster": {
        "tags": {
            "video": {"description": "Poster frame to show prior to video playback","value": "Valid non-empty URL potentially surrounded by spaces"}
        },
        "idl": "poster"
    },
    "preload": {
        "tags": {
            "audio": {"description": "Hints how much buffering the media resource will likely need","value": "\"none\"; \"metadata\"; \"auto\""},
            "video": {"description": "Hints how much buffering the media resource will likely need","value": "\"none\"; \"metadata\"; \"auto\""}
        },
        "idl": "preload"
    },
    "radiogroup": {
        "tags": {
            "menuitem": {"description": "Name of group of commands to treat as a radio button group","value": "Text"}
        },
        "idl": "radiogroup"
    },
    "readonly": {
        "tags": {
            "input": {"description": "Whether to allow the value to be edited by the user","value": "Boolean attribute"},
            "textarea": {"description": "Whether to allow the value to be edited by the user","value": "Boolean attribute"}
        },
        "idl": "readOnly"
    },
    "rel": {
        "tags": {
            "a": {"description": "Relationship between the document containing the hyperlink and the destination resource","value": "Set of space-separated tokens*"},
            "area": {"description": "Relationship between the document containing the hyperlink and the destination resource","value": "Set of space-separated tokens*"},
            "link": {"description": "Relationship between the document containing the hyperlink and the destination resource","value": "Set of space-separated tokens*"}
        },
        "idl": "rel"
    },
    "required": {
        "tags": {
            "input": {"description": "Whether the control is required for form submission","value": "Boolean attribute"},
            "select": {"description": "Whether the control is required for form submission","value": "Boolean attribute"},
            "textarea": {"description": "Whether the control is required for form submission","value": "Boolean attribute"}
        },
        "idl": "required"
    },
    "reversed": {
        "tags": {
            "ol": {"description": "Number the list backwards","value": "Boolean attribute"}
        },
        "idl": "reversed"
    },
    "rows": {
        "tags": {
            "textarea": {"description": "Number of lines to show","value": "Valid non-negative integer greater than zero"}
        },
        "idl": "rows"
    },
    "rowspan": {
        "tags": {
            "td": {"description": "Number of rows that the cell is to span","value": "Valid non-negative integer"},
            "th": {"description": "Number of rows that the cell is to span","value": "Valid non-negative integer"}
        },
        "idl": "rowSpan"
    },
    "sandbox": {
        "tags": {
            "iframe": {"description": "Security rules for nested content","value": "Unordered set of unique space-separated tokens, ASCII case-insensitive, consisting of \"allow-forms\", \"allow-modals\", \"allow-pointer-lock\", \"allow-popups\", \"allow-popups-to-escape-sandbox\", \"allow-same-origin\", \"allow-scripts and \"allow-top-navigation\""}
        },
        "idl": "sandbox"
    },
    "spellcheck": {
        "tags": {
            "HTML elements": {"description": "Whether the element is to have its spelling and grammar checked","value": "\"true\"; \"false\""}
        },
        "idl": "spellcheck"
    },
    "scope": {
        "tags": {
            "th": {"description": "Specifies which cells the header cell applies to","value": "\"row\"; \"col\"; \"rowgroup\"; \"colgroup\""}
        },
        "idl": "scope"
    },
    "scoped": {
        "tags": {
            "style": {"description": "Whether the styles apply to the entire document or just the parent subtree","value": "Boolean attribute"}
        },
        "idl": "scoped"
    },
    "seamless": {
        "tags": {
            "iframe": {"description": "Whether to apply the document's styles to the nested content","value": "Boolean attribute"}
        },
        "idl": "seamless"
    },
    "selected": {
        "tags": {
            "option": {"description": "Whether the option is selected by default","value": "Boolean attribute"}
        },
        "idl": "defaultSelected"
    },
    "shape": {
        "tags": {
            "area": {"description": "The kind of shape to be created in an image map","value": "\"circle\"; \"default\"; \"poly\"; \"rect\""}
        },
        "idl": "shape"
    },
    "size": {
        "tags": {
            "input": {"description": "Size of the control","value": "Valid non-negative integer greater than zero"},
            "select": {"description": "Size of the control","value": "Valid non-negative integer greater than zero"}
        },
        "idl": "size"
    },
    "sizes": {
        "tags": {
            "link": {"description": "Sizes of the icons (for rel=\"icon\")","value": "Unordered set of unique space-separated tokens, ASCII case-insensitive, consisting of sizes*"}
        },
        "idl": "sizes"
    },
    "sortable": {
        "tags": {
            "table": {"description": "Enables a sorting interface for the table","value": "Boolean attribute"}
        },
        "idl": "sortable"
    },
    "sorted": {
        "tags": {
            "th": {"description": "Column sort direction and ordinality","value": "Set of space-separated tokens, ASCII case-insensitive, consisting of neither, one, or both of \"reversed\" and a valid non-negative integer greater than zero"}
        },
        "idl": "sorted"
    },
    "span": {
        "tags": {
            "col": {"description": "Number of columns spanned by the element","value": "Valid non-negative integer greater than zero"},
            "colgroup": {"description": "Number of columns spanned by the element","value": "Valid non-negative integer greater than zero"}
        },
        "idl": "span"
    },
    "src": {
        "tags": {
            "audio": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"},
            "embed": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"},
            "iframe": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"},
            "img": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"},
            "input": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"},
            "script": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"},
            "source": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"},
            "track": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"},
            "video": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"}
        },
        "idl": "src"
    },
    "srcdoc": {
        "tags": {
            "iframe": {"description": "A document to render in the iframe","value": "The source of an iframe srcdoc document*"}
        },
        "idl": "srcdoc"
    },
    "srclang": {
        "tags": {
            "track": {"description": "Language of the text track","value": "Valid BCP 47 language tag"}
        },
        "idl": "srclang"
    },
    "srcset": {
        "tags": {
            "img": {"description": "Images to use in different situations (e.g. high-resolution displays, small monitors, etc)","value": "Comma-separated list of image candidate strings"}
        },
        "idl": "srcset"
    },
    "start": {
        "tags": {
            "ol": {"description": "Ordinal value of the first item","value": "Valid integer"}
        },
        "idl": "start"
    },
    "step": {
        "tags": {
            "input": {"description": "Granularity to be matched by the form control's value","value": "Valid floating-point number greater than zero, or \"any\""}
        },
        "idl": "step"
    },
    "style": {
        "tags": {
            "HTML elements": {"description": "Presentational and formatting instructions","value": "CSS declarations*"}
        },
        "idl": "style",
        "noProperty": true  // https://stackoverflow.com/questions/24906279/how-to-set-element-style-property-in-strict-mode,
    },
    "tabindex": {
        "tags": {
            "HTML elements": {"description": "Whether the element is focusable, and the relative order of the element for the purposes of sequential focus navigation","value": "Valid integer"}
        },
        "idl": "tabIndex"
    },
    "target": {
        "tags": {
            "a": {"description": "Browsing context for hyperlink navigation","value": "Valid browsing context name or keyword"},
            "area": {"description": "Browsing context for hyperlink navigation","value": "Valid browsing context name or keyword"},
            "base": {"description": "Default browsing context for hyperlink navigation and form submission","value": "Valid browsing context name or keyword"},
            "form": {"description": "Browsing context for form submission","value": "Valid browsing context name or keyword"}
        },
        "idl": "target"
    },
    "title": {
        "tags": {
            "HTML elements": {"description": "Advisory information for the element","value": "Text"},
            "abbr": {"description": "Full term or expansion of abbreviation","value": "Text"},
            "dfn": {"description": "Full term or expansion of abbreviation","value": "Text"},
            "input": {"description": "Description of pattern (when used with pattern attribute)","value": "Text"},
            "menuitem": {"description": "Hint describing the command","value": "Text"},
            "link": {"description": "Alternative style sheet set name","value": "Text"},
            "style": {"description": "Alternative style sheet set name","value": "Text"}
        },
        "idl": "title"
    },
    "translate": {
        "tags": {
            "HTML elements": {"description": "Whether the element is to be translated when the page is localized","value": "\"yes\"; \"no\""}
        },
        "idl": "translate"
    },
    "type": {
        "tags": {
            "a": {"description": "Hint for the type of the referenced resource","value": "Valid MIME type"},
            "link": {"description": "Hint for the type of the referenced resource","value": "Valid MIME type"},
            "button": {"description": "Type of button","value": "\"submit\"; \"reset\"; \"button\"; \"menu\""},
            "embed": {"description": "Type of embedded resource","value": "Valid MIME type"},
            "object": {"description": "Type of embedded resource","value": "Valid MIME type"},
            "script": {"description": "Type of embedded resource","value": "Valid MIME type"},
            "source": {"description": "Type of embedded resource","value": "Valid MIME type"},
            "style": {"description": "Type of embedded resource","value": "Valid MIME type"},
            "input": {"description": "Type of form control","value": "input type keyword"},
            "menu": {"description": "Type of menu","value": "\"context\"; \"toolbar\""},
            "menuitem": {"description": "Type of command","value": "\"command\"; \"checkbox\"; \"radio\""},
            "ol": {"description": "Kind of list marker","value": "\"1\"; \"a\"; \"A\"; \"i\"; \"I\""}
        },
        "idl": "type"
    },
    "typemustmatch": {
        "tags": {
            "object": {"description": "Whether the type attribute and the Content-Type value need to match for the resource to be used","value": "Boolean attribute"}
        },
        "idl": "typemustmatch"
    },
    "usemap": {
        "tags": {
            "img": {"description": "Name of image map to use","value": "Valid hash-name reference*"},
            "object": {"description": "Name of image map to use","value": "Valid hash-name reference*"}
        },
        "idl": "useMap"
    },
    "value": {
        "tags": {
            "button": {"description": "Value to be used for form submission","value": "Text"},
            "option": {"description": "Value to be used for form submission","value": "Text"},
            "data": {"description": "Machine-readable value","value": "Text*"},
            "input": {"description": "Value of the form control","value": "Varies*"},
            "li": {"description": "Ordinal value of the list item","value": "Valid integer"},
            "meter": {"description": "Current value of the element","value": "Valid floating-point number"},
            "progress": {"description": "Current value of the element","value": "Valid floating-point number"},
            "param": {"description": "Value of parameter","value": "Text"}
        },
        "idl": "value"
    },
    "width": {
        "tags": {
            "canvas": {"description": "Horizontal dimension","value": "Valid non-negative integer"},
            "embed": {"description": "Horizontal dimension","value": "Valid non-negative integer"},
            "iframe": {"description": "Horizontal dimension","value": "Valid non-negative integer"},
            "img": {"description": "Horizontal dimension","value": "Valid non-negative integer"},
            "input": {"description": "Horizontal dimension","value": "Valid non-negative integer"},
            "object": {"description": "Horizontal dimension","value": "Valid non-negative integer"},
            "video": {"description": "Horizontal dimension","value": "Valid non-negative integer"}
        },
        "idl": "width"
    },
    "wrap": {
        "tags": {
            "textarea": {"description": "How the value of the form control is to be wrapped for form submission","value": "\"soft\"; \"hard\""}
        },
        "idl": "wrap"
    },
    // generate by generators/attributes.js
    "aria-hidden": {
        "tags": {
            "svg": {"description": "SVG", "value":"svg"}
        },
        "idl": "aria-hidden",
        "noProperty": true
    },
    "d": {
        "tags": {
            "path": {"description": "SVG path", "value":"svg"}
        },
        "idl": "d",
        "noProperty": true
    },
    "focusable": {
        "tags": {
            "svg": {"description": "SVG", "value":"svg"}
        },
        "idl": "focusable",
        "noProperty": true
    },
    "viewbox": {
        "tags": {
            "svg": {"description": "SVG", "value":"svg"}
        },
        "idl": "viewBox",
        "noProperty": true
    },
};
// generated by generators/attributes.js
//

// htmlAttributes.checked.idl='checked';

// var ok=Object.keys(jsToHtml.htmlTags)

// // Object.keys(htmlTags).map(function(tagName){
// ok.map(function(tagName){
//     // html[tagName]=function(contentOrAttributes,contentIfThereAreAttributes){
//         // return indirect(tagName,contentOrAttributes,contentIfThereAreAttributes);
//     // };
// // });


setScriptIsVoid(SCRIPT_IS_VOID);

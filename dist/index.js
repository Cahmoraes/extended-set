"use strict";Object.defineProperty(exports, "__esModule", {value: true});var i=class extends Set{filter(n){let e=new i;for(let t of this)n(t)&&e.add(t);return e}reduce(...n){let[e,t]=n;if(r()){let[u,...a]=this;return l(a,u)}return l(this,t);function r(){return t==null}function l(u,a){let s=a;for(let c of u)s=e(s,c);return s}}map(n){let e=new i;for(let t of this)e.add(n(t));return e}isSuperSetOf(n){for(let e of n)if(!this.has(e))return!1;return!0}union(...n){return this._unionSets([this,...n])}intersection(n){let e=new i;for(let t of n)this.has(t)&&e.add(t);return e}difference(n){let e=new i;for(let t of n)this.has(t)||e.add(t);return e}toArray(){return[...this]}_unionSets(n){let e=new i;for(let t of n)for(let r of t)e.add(r);return e}};exports.default = i;
//# sourceMappingURL=index.js.map
var i=class extends Set{filter(t){let e=new i;for(let n of this)t(n)&&e.add(n);return e}reduce(...t){let[e,n]=t;if(r()){let[u,...a]=this;return o(a,u)}return o(this,n);function r(){return n==null}function o(u,a){let s=a;for(let l of u)s=e(s,l);return s}}map(t){let e=new i;for(let n of this)e.add(t(n));return e}isSuperSetOf(t){for(let e of t)if(!this.has(e))return!1;return!0}isSubSetOf(t){for(let e of this)if(!t.has(e))return!1;return!0}union(...t){return this._unionSets([this,...t])}intersection(t){let e=new i;for(let n of t)this.has(n)&&e.add(n);return e}difference(t){let e=new i;for(let n of t)this.has(n)||e.add(n);return e}toArray(){return[...this]}_unionSets(t){let e=new i;for(let n of t)for(let r of n)e.add(r);return e}};export{i as default};
//# sourceMappingURL=index.mjs.map
var i=class extends Set{static of(t){return new i(t)}filter(t){let e=new i;for(let n of this)t(n)&&e.add(n);return e}reduce(...t){let[e,n]=t;if(r()){let[l,...u]=this;return a(u,l)}return a(this,n);function r(){return n==null}function a(l,u){let p=u;for(let o of l)p=e(p,o);return p}}map(t){let e=new i;for(let n of this)e.add(t(n));return e}find(t){for(let e of this)if(t(e))return e;return null}every(t){for(let e of this)if(!t(e))return!1;return!0}some(t){for(let e of this)if(t(e))return!0;return!1}isSuperSetOf(t){for(let e of t)if(!this.has(e))return!1;return!0}isSubSetOf(t){for(let e of this)if(!t.has(e))return!1;return!0}union(...t){return this.performUnionSets([this,...t])}performUnionSets(t){let e=new i;for(let n of t)for(let r of n)e.add(r);return e}intersection(t){let e=new i;for(let n of t)this.has(n)&&e.add(n);return e}difference(t){let e=new i;for(let n of t)this.has(n)||e.add(n);return e}toArray(){return[...this]}get[Symbol.toStringTag](){return"ExtendedSet"}toString(){return[...this].join()}};export{i as default};
//# sourceMappingURL=index.mjs.map
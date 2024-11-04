export { default as SiAppLoader } from '../..\\components\\si\\AppLoader.vue'
export { default as SiAvatar } from '../..\\components\\si\\Avatar.vue'
export { default as SiCarousel } from '../..\\components\\si\\Carousel.vue'
export { default as SiCartItem } from '../..\\components\\si\\CartItem.vue'
export { default as SiCollection } from '../..\\components\\si\\Collection.vue'
export { default as SiFullImage } from '../..\\components\\si\\FullImage.vue'
export { default as SiImage } from '../..\\components\\si\\Image.vue'
export { default as SiLoader } from '../..\\components\\si\\Loader.vue'
export { default as SiLoaderGlobal } from '../..\\components\\si\\LoaderGlobal.vue'
export { default as SiPost } from '../..\\components\\si\\Post.vue'
export { default as SiPriceRange } from '../..\\components\\si\\PriceRange.vue'
export { default as SiProduct } from '../..\\components\\si\\Product.vue'
export { default as SiProductPrice } from '../..\\components\\si\\ProductPrice.vue'
export { default as SiProductQuantity } from '../..\\components\\si\\ProductQuantity.vue'
export { default as SiProductVariants } from '../..\\components\\si\\ProductVariants.vue'
export { default as SiSvg } from '../..\\components\\si\\Svg.vue'
export { default as SectionsBanner } from '../..\\components\\sections\\Banner.vue'
export { default as SectionsCollections } from '../..\\components\\sections\\Collections.vue'
export { default as SectionsCollectionsSlide } from '../..\\components\\sections\\CollectionsSlide.vue'
export { default as SectionsCopyright } from '../..\\components\\sections\\Copyright.vue'
export { default as SectionsCounter } from '../..\\components\\sections\\Counter.vue'
export { default as SectionsFooter } from '../..\\components\\sections\\Footer.vue'
export { default as SectionsFooterMenu } from '../..\\components\\sections\\FooterMenu.vue'
export { default as SectionsHeader } from '../..\\components\\sections\\Header.vue'
export { default as SectionsHeaderMenu } from '../..\\components\\sections\\HeaderMenu.vue'
export { default as SectionsHeaderTop } from '../..\\components\\sections\\HeaderTop.vue'
export { default as SectionsLastCollections } from '../..\\components\\sections\\LastCollections.vue'
export { default as SectionsMap } from '../..\\components\\sections\\map.vue'
export { default as SectionsPosts } from '../..\\components\\sections\\Posts.vue'
export { default as SectionsProducts } from '../..\\components\\sections\\Products.vue'
export { default as SectionsRelatedPosts } from '../..\\components\\sections\\RelatedPosts.vue'
export { default as SectionsRelatedProducts } from '../..\\components\\sections\\RelatedProducts.vue'
export { default as SectionsReviews } from '../..\\components\\sections\\Reviews.vue'
export { default as SectionsServices } from '../..\\components\\sections\\Services.vue'
export { default as SectionsSlides } from '../..\\components\\sections\\Slides.vue'
export { default as SectionsTwoCollections } from '../..\\components\\sections\\TwoCollections.vue'
export { default as SectionsUpsell } from '../..\\components\\sections\\Upsell.vue'
export { default as SectionsUpsellOffers } from '../..\\components\\sections\\Upsell_Offers.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

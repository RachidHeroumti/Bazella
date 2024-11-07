<template>
  <div class=" ">
    <si-app-loader placement="BEFORE_HEADER" />
    <div class="relative text-primary px-40px bg-white shadow-sm ">
      <div
        class="border-b border-gray-200  flex-col md:flex-row justify-between text-12px text-black font-poppins hidden md:flex"
      >
        <div class="flex items-center h-full ">
          <a href="/about" class="px-10px py-5px block">About</a>
          <a href="/contact" class="px-10 py-5px block">Contact</a>
          <a href="/faq" class="px-10px py-5px block">FAQ</a>
        </div>
        <div class="flex items-center">
          <div v-if="socialMedia" class="flex flex-wrap">
            <div
              v-for="item in socialMedia.filter(
                (s) => $settings.sections.footer.social_media[s.name]
              )"
              :key="item.name"
              class="ml-3 flex items-center justify-between"
            >
              <a
                class="h-full flex"
                :href="$settings.sections.footer.social_media[item.name]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <si-image
                  class="h-4 w-4"
                  width="16"
                  height="16"
                  :src="item.image"
                  :alt="item.name"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between py-20px">
        <div class="flex items-center justify-start h-full">
          <!-- <button @click="$store.state.showHeaderMenu = !$store.state.showHeaderMenu" aria-label="Search button" class="flex flex-col p-2 bg-gray-100 rounded-md hover:bg-gray-200">
                    <si-svg><svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 translate"><g class="fa-group"><path fill="currentColor" d="M16 288h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16z" class="fa-secondary"></path><path fill="currentColor" d="M432 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16z"></path></g></svg></si-svg>
                </button>
                <div v-if="$settings.sections.header.icons.currency && $settings.store_currencies.length > 1" class="relative mx-1">
                    <div v-if="iconMenu == 'currency'" class="absolute z-50 flex flex-col bg-gray-100 rounded-md top-5">
                        <a class="p-2 m-1 bg-white whitespace-nowrap" v-for="cur of $settings.store_currencies" :key="cur.code" :href="`?cur=${cur.code}`">{{ cur.name }} ( {{ cur.code }} )</a>
                    </div>
                </div>
                <button @click="iconMenu = iconMenu == 'currency' ? null : 'currency'" v-if="$settings.sections.header.icons.currency && $settings.store_currencies.length > 1" title="Currency" class="item hidden md:block p-1.5 bg-gray-100 rounded-md hover:bg-gray-200">
                    <span class="text-sm">{{ $store.state.currency.code }}</span>
                </button>
                <div v-if="$settings.sections.header.icons.language && $settings.store_languages.length > 1" class="relative mx-1">
                    <div v-if="iconMenu == 'language'" class="absolute z-50 flex flex-col bg-gray-100 rounded-md top-5">
                        <a class="p-2 m-1 bg-white whitespace-nowrap" v-for="lang of $settings.store_languages" :key="lang.code" :href="`?lang=${lang.code}`">{{ lang.name }} ( {{ lang.code }} )</a>
                    </div>
                </div>
                <button @click="iconMenu = iconMenu == 'language' ? null : 'language'" v-if="$settings.sections.header.icons.language && $settings.store_languages.length > 1" title="Language" class="item hidden md:block p-1.5 bg-gray-100 rounded-md hover:bg-gray-200">
                    <span class="text-sm">{{ $store.state.language.code }}</span>
                </button> -->

          <button
            v-if="$settings.sections.header.icons.search"
            @click="showSearch = true"
            aria-label="Search button"
            class="relative p-2 mx-1 item"
          >
            <si-svg
              ><svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-5 h-5 translate"
              >
                <path
                  fill="currentColor"
                  d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                  class=""
                ></path></svg></si-svg>
            <small
              v-if="$route.query.search"
              class="absolute flex items-center justify-center w-1 h-1 p-1 text-white bg-green-700 rounded-full -top-1 -right-1"
            ></small>
          </button>
        </div>

        <div
          class="flex items-center justify-center  text-13.6px tracking-0.2em "
        >
          <div v-if="section.left_menu" class="hidden md:flex">
            <div
              v-if="section.left_menu && section.left_menu.items"
              class="hidden font-poppins justify-end px-3 items-center w-full md:flex h-full"
            >
              <ul
                v-for="(item, i) in section.left_menu.items"
                :key="i"
                class="flex flex-col menuTextStyle cursor-pointer"
              >
                <li
                  class="relative flex justify-between w-full  overflow-visible"
                  @mouseenter="hoveredItem = i"
                  @mouseleave="hoveredItem = null"
                  @focus="hoveredItem = i"
                  @mouseover="hoveredItem = i"
                >
                  <!-- Parent Item Text -->
                  <div class="p-4 w-full flex" @focus="hoveredItem = i">
                    <router-link
                      class=" uppercase flex justify-center items-center group relative"
                      :class="i == 0 ? '' : ''"
                      :to="item.url"
                      ><span class="py-1 px-0 ">{{ item.text }}</span>
                      <span class="absolute left-0 bottom-0 w-3/4 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>  

                      <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="#1c1c1c"
              >
                <path
                  d="M480-353 240-593l46.67-46.67 193.33 193 193.33-193L720-593 480-353Z"
                />
              </svg>
                    </router-link>
                  </div>

                  <!-- First Level Submenu -->
                  <ul
                    v-if="item.childrens && item.childrens.length > 0"
                    :class="[
                      'submenu',
                      { 'submenu-visible': hoveredItem === i },
                    ]"
                    class="p-4 py-2 sm:py-5 z-30 w-40 bg-white shadow-sm"
                    @mouseenter="hoveredItem = i"
                    @mouseleave="hoveredItem = null"
                  >
                    <li
                      v-for="(child, ii) in item.childrens"
                      :key="ii"
                      class="py-1 hover:underline relative"
                      @mouseenter="hoveredChild = ii"
                      @mouseleave="hoveredChild = null"
                      @mouseover="hoveredChild = ii"
                    >
                      <nuxt-link
                        class="flex whitespace-nowrap font-base justify-between items-center text-12p"
                        :to="child.url"
                      >
                        <span> {{ child.text }}</span>

                        <si-svg>
                          <svg
                            v-if="child.childrens && child.childrens.length > 0"
                            class="w-2 transform"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 330 330"
                            style="enable-background: new 0 0 330 330"
                            xml:space="preserve"
                          >
                            <path
                              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                            />
                          </svg>
                        </si-svg>
                      </nuxt-link>

                      <ul
                        v-if="child.childrens && child.childrens.length > 0"
                        :class="[
                          'second-level-submenu',
                          {
                            'second-level-submenu-visible': hoveredChild === ii,
                          },
                        ]"
                        class="w-40 bg-white z-30 p shadow-sm sm:px-3 md:px-5 py-1 sm:py-3 md:py-5"
                        @mouseenter="hoveredChild = ii"
                        @mouseleave="hoveredChild = null"
                      >
                        <li
                          v-for="(grandchild, iii) in child.childrens"
                          :key="iii"
                          class="py-1 hover:underline"
                        >
                          <nuxt-link
                            class="flex whitespace-nowrap font-base text-12p"
                            :to="grandchild.url"
                          >
                            {{ grandchild.text }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
    

          <router-link to="/">
            <nuxt-img
              width="70"
              height="50"
              property="height"
              class="object-contain w-full h-12"
              :src="
                section.logo ? section.logo.src : $store.state.defaults.logo
              "
              alt="Store logo"
            />
          </router-link>

          <div v-if="section.right_menu" class="hidden md:flex">
            <div
              v-if="section.right_menu && section.left_menu.items"
              class="hidden font-poppins justify-end px-3 items-center w-full md:flex h-full"
            >
              <ul
                v-for="(item, i) in section.right_menu.items"
                :key="i"
                class="flex flex-col menuTextStyle cursor-pointer"
              >
                <li
                  class="relative flex justify-between w-full overflow-visible"
                  @mouseenter="hoveredItem = i"
                  @mouseleave="hoveredItem = null"
                  @focus="hoveredItem = i"
                  @mouseover="hoveredItem = i"
                >
                  <!-- Parent Item Text -->
                  <div class="p-4 w-full flex" @focus="hoveredItem = i">
                    <router-link
                      class=" uppercase  relative group flex justify-center items-center"
                      :class="i == 0 ? ' ' : ''"
                      :to="item.url"
                      ><span class="py-1 px-0 ">{{ item.text }}</span>
                      <span class="absolute  left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>  
                      </router-link>
                  </div>

                  <!-- First Level Submenu -->
                  <ul
                    v-if="item.childrens && item.childrens.length > 0"
                    :class="[
                      'submenu',
                      { 'submenu-visible': hoveredItem === i },
                    ]"
                    class="p-4 py-2 sm:py-5 z-30 w-40 bg-white shadow-sm"
                    @mouseenter="hoveredItem = i"
                    @mouseleave="hoveredItem = null"
                  >
                    <li
                      v-for="(child, ii) in item.childrens"
                      :key="ii"
                      class="py-1 hover:underline relative"
                      @mouseenter="hoveredChild = ii"
                      @mouseleave="hoveredChild = null"
                      @mouseover="hoveredChild = ii"
                    >
                      <nuxt-link
                        class="flex whitespace-nowrap font-base justify-between items-center text-12p"
                        :to="child.url"
                      >
                        <span> {{ child.text }}</span>

                        <si-svg>
                          <svg
                            v-if="child.childrens && child.childrens.length > 0"
                            class="w-2 transform"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 330 330"
                            style="enable-background: new 0 0 330 330"
                            xml:space="preserve"
                          >
                            <path
                              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                            />
                          </svg>
                        </si-svg>
                      </nuxt-link>

                      <ul
                        v-if="child.childrens && child.childrens.length > 0"
                        :class="[
                          'second-level-submenu',
                          {
                            'second-level-submenu-visible': hoveredChild === ii,
                          },
                        ]"
                        class="w-40 bg-white z-30 p shadow-sm sm:px-3 md:px-5 py-1 sm:py-3 md:py-5"
                        @mouseenter="hoveredChild = ii"
                        @mouseleave="hoveredChild = null"
                      >
                        <li
                          v-for="(grandchild, iii) in child.childrens"
                          :key="iii"
                          class="py-1 hover:underline"
                        >
                          <nuxt-link
                            class="flex whitespace-nowrap font-base text-12p"
                            :to="grandchild.url"
                          >
                            {{ grandchild.text }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
    
        </div>

        <div class="flex items-center justify-end icons">
          <router-link
            v-if="$settings.sections.header.icons.account"
            to="/account/orders"
            title="Account"
            class="p-2 mx-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 -960 960 960"
              width="28px"
              fill="#1c1c1c"
            >
              <path
                d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"
              />
            </svg>
          </router-link>

          <!-- <router-link v-if="$settings.sections.header.icons.wishlist" to="/wishlist" title="Wishlist" class="relative hidden p-2 mx-1 bg-gray-100 rounded-md item md:block hover:bg-gray-200">
                    <si-svg><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 translate"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" class=""></path></svg></si-svg>
                    <small class="absolute flex items-center justify-center w-5 h-5 p-2 text-white bg-red-700 rounded-full -top-2 -right-2">{{ $store.state.wishlist.length }}</small>
                </router-link> -->
          <router-link
            v-if="$settings.sections.header.icons.cart"
            to="/cart"
            title="Cart"
            id="cart-icon"
            class="relative p-2 mx-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 -960 960 960"
              width="28px"
              fill="#1c1c1c"
            >
              <path
                d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"
              />
            </svg>
            <!-- <small class="absolute flex items-center justify-center w-5 h-5 p-2 text-white bg-red-700 rounded-full top-0 right-0">{{ $store.state.cart.length }}</small> -->
          </router-link>
        </div>
      </div>

      <div
        v-if="showSearch"
        class="absolute inset-0 z-20 bg-gray-300 h-full flex items-center justify-center"
      >
        <div class="absolute w-full p-2">
          <form
            @submit.prevent="search"
            class="container flex p-2 border border-black search bg-white"
            action="/shop?"
          >
            <button
              type="button"
              @click="showSearch = false"
              aria-label="Search button"
            >
              <si-svg
                ><svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="times"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  class="w-5 h-5 translate"
                >
                  <path
                    fill="currentColor"
                    d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                    class=""
                  ></path></svg></si-svg>
            </button>
            <input
              autofocus
              v-model="q"
              class="w-full px-2 bg-transparent outline-none"
              :placeholder="'Search for products'"
              type="search"
              name="q"
            />
            <button aria-label="Search button">
              <si-svg
                ><svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="search"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="w-5 h-5 translate"
                >
                  <path
                    fill="currentColor"
                    d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                    class=""
                  ></path></svg
              ></si-svg>
            </button>
          </form>
        </div>
      </div>
    </div>
    <si-app-loader placement="AFTER_HEADER" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSearch: false,
      iconMenu: null,
      q: this.$route.query.search,
      section: this.$settings.sections.header,
      socialMedia: [
        {
          name: "facebook",
          image: "https://www.svgrepo.com/show/508815/facebook.svg",
        },

        {
          name: "instagram",
          image: "https://www.svgrepo.com/show/521711/instagram.svg",
        },
        {
          name: "snapchat",
          image: "https://www.svgrepo.com/show/510208/snapchat.svg",
        },
        {
          name: "tiktok",
          image: "https://www.svgrepo.com/show/333611/tiktok.svg",
        },
      ],
      hoveredChild: null,
      activeId: null,
      activeChildid: null,
      hoveredItem: null,
      showMenuList: false,
      lastScrollTop: 0,
      isHidden: false,
      isFixed: true,
      listApps: this.$store.state.apps,
    };
  },
  watch: {
    showSearch(val) {
      if (val) {
        this.$nextTick(() => {
          document.querySelector("form.search input").focus();
        });
      }
    },
  },
  methods: {
    search() {
      this.$store.state.search = this.q;
      this.$router.push({ path: "/shop", query: { search: this.q } });
      this.showSearch = false;
    },
  },
};
</script>

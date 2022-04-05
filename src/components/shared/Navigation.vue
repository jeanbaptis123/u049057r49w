<template>
  <header>
    <nav id="sticky-wrapper">
      <div id="navaccordion" class="container accordion">
        <div class="row">
          <div class="col-md-3 mobile-toggler-wrapper">
            <a id="logoheadurl" href="/home">
              <img id="toplogo" alt="dark proxyscrape logo"
                   src="https://cdn.proxyscrape.com/img/logo/dark_text_logo.png">
            </a>
            <button
              class="navbar-toggler"
              type="button"
            >
              <span class="navbar-toggler-icon">
                <img alt='' src="@/assets/img/menu-toggle.svg">
              </span>
            </button>
          </div>
          <div class="col-md-9 navigation-container">
            <div class="navigation navbar-expand">
              <ul id="mainmenu" class="list-inline text-right collapse navbar-collapse">

                <li><a href="/home">Home</a></li>
                <li class="dropdown  current-menu-has-children">
                  <a
                    class="collapsed">
                    Services
                    <img alt='' src='@/assets/img/menu-dropdown.svg'>
                  </a>
                  <div id="extramenu" class="collapse">
                    <ul class="dropdown-nav dropdown-nav-left">
                      <li><a href="/premium?ref=head">Premium</a></li>

                      <li><a href="/residential-proxies?ref=head">Residential proxies</a></li>
                      <li><a href="/dedicated-proxies?ref=head">Dedicated proxies</a></li>
                    </ul>
                  </div>
                </li>

                <li class="dropdown  current-menu-has-children">
                  <a
                    class="collapsed">Freebies
                    <img alt='' src='@/assets/img/menu-dropdown.svg'>
                  </a>
                  <div id="extramenu" class="collapse" data-parent="#navaccordion">
                    <ul class="dropdown-nav dropdown-nav-left">
                      <li><a href="/free-proxy-list">Free proxy list</a></li>
                      <li><a href="/web-proxy">Web proxy</a></li>

                      <li><a href="/online-proxy-checker">Online proxy checker</a></li>
                      <li><a href="/proxy-filter">Proxy filter</a></li>
                      <li><a href="https://docs.proxyscrape.com/" target="_blank">API</a></li>
                    </ul>
                  </div>
                </li>

                <li class="dropdown current-menu-has-children">
                  <a aria-controls="helpmenu" aria-expanded="false"
                     aria-label="Toggle help navigation"
                     class="collapsed" data-target="#helpmenu" data-toggle="collapse">help
                    center
                    <img alt='' src='@/assets/img/menu-dropdown.svg'>
                  </a>
                  <div id="helpmenu" class="collapse" data-parent="#navaccordion">
                    <ul class="dropdown-nav dropdown-nav-left">
                      <li><a href="/help-center">Visit help center</a></li>
                      <li><a href="https://support.proxyscrape.com/">Knowledge base</a></li>
                      <li><a href="https://roadmap.proxyscrape.com/">Roadmap</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="/blog/">Blog</a></li>
                <li><a href="https://dashboard.proxyscrape.com/login">Login</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang='ts' setup>
</script>

<style scoped>

</style>

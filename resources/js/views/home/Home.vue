<template>
<div  class="main-block mt-5 pt-5">
<section class="banner-area">
       <div class="container">
           <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
               <ol class="carousel-indicators">
                   <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                   <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                   <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
               </ol>
               <div class="carousel-inner">
                   <div class="carousel-item active">
                       <div class="row single-slide align-items-center d-flex">
                           <div class="col-lg-5 col-md-6">
                               <div class="banner-content">
                                   <h1>Nike New <br>Collection!</h1>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                       dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                   <div class="add-bag d-flex align-items-center">
                                       <a class="add-btn" href=""><span class="lnr lnr-cross"></span></a>
                                       <span class="add-text text-uppercase">Add to Bag</span>
                                   </div>
                               </div>
                           </div>
                           <div class="col-lg-7">
                               <div class="banner-img">
                                   <img class="img-fluid w-75" src="img/banner/banner-img.png" alt="">
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="carousel-item">
                       <div class="row single-slide align-items-center d-flex">
                           <div class="col-lg-5 col-md-6">
                               <div class="banner-content">
                                   <h1>Nike New <br>Collection!</h1>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                       dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                   <div class="add-bag d-flex align-items-center">
                                       <a class="add-btn" href=""><span class="lnr lnr-cross"></span></a>
                                       <span class="add-text text-uppercase">Add to Bag</span>
                                   </div>
                               </div>
                           </div>
                           <div class="col-lg-7">
                               <div class="banner-img">
                                   <img class="img-fluid  w-75" src="img/banner/banner-img.png" alt="">
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="carousel-item">
                       <div class="row single-slide align-items-center d-flex">
                           <div class="col-lg-5 col-md-6">
                               <div class="banner-content">
                                   <h1>Nike New <br>Collection!</h1>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                       dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                   <div class="add-bag d-flex align-items-center">
                                       <a class="add-btn" href=""><span class="lnr lnr-cross"></span></a>
                                       <span class="add-text text-uppercase">Add to Bag</span>
                                   </div>
                               </div>
                           </div>
                           <div class="col-lg-7">
                               <div class="banner-img">
                                   <img class="img-fluid  w-75" src="img/banner/banner-img.png" alt="">
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span class="sr-only">Previous</span>
               </a>
               <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
                   <span class="sr-only">Next</span>
               </a>
           </div>
       </div>
   </section>
    <section class="features-area section_gap">
        <feature></feature>
    </section>
    <section class="category-area">
        <category></category>
    </section>
    <section class="owl-carousel active-product-area section_gap">
        <div class="single-product-slider">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 text-center">
                        <div class="section-title">
                            <h1>Latest Products</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore
                                magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6" v-for="(product,index) in products" @key="index">
                        <div class="single-product">
                            <router-link :to="{ path: '/products/'+product.id}">
                                <img :src="product.image" :alt="product.name" class="img-fluid">
                                <div class="product-details">
                                    <h6>{{ product.name }}</h6>
                                    <div class="price">
                                        <h6>${{ product.new_price }}</h6>
                                        <h6 class="l-through">${{ product.old_price }}</h6>
                                    </div>
                                    <div class="prd-bottom">

                                        <a href="" class="social-info">
                                            <span class="ti-bag"></span>
                                            <p class="hover-text">add to bag</p>
                                        </a>
                                        <a href="" class="social-info">
                                            <span class="lnr lnr-heart"></span>
                                            <p class="hover-text">Wishlist</p>
                                        </a>
                                        <a href="" class="social-info">
                                            <span class="lnr lnr-sync"></span>
                                            <p class="hover-text">compare</p>
                                        </a>
                                        <a href="" class="social-info">
                                            <span class="lnr lnr-move"></span>
                                            <p class="hover-text">view more</p>
                                        </a>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="single-product-slider">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 text-center">
                        <div class="section-title">
                            <h1>Coming Products</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore
                                magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6" v-for="product in products">
                        <div class="single-product">
                            <img :src="product.image" :alt="product.name" class="img-fluid">
                            <div class="product-details">
                                <h6>{{ product.name }}</h6>
                                <div class="price">
                                    <h6>${{ product.new_price }}</h6>
                                    <h6 class="l-through">${{ product.old_price }}</h6>
                                </div>
                                <div class="prd-bottom">

                                    <a href="" class="social-info">
                                        <span class="ti-bag"></span>
                                        <p class="hover-text">add to bag</p>
                                    </a>
                                    <a href="" class="social-info">
                                        <span class="lnr lnr-heart"></span>
                                        <p class="hover-text">Wishlist</p>
                                    </a>
                                    <a href="" class="social-info">
                                        <span class="lnr lnr-sync"></span>
                                        <p class="hover-text">compare</p>
                                    </a>
                                    <a href="" class="social-info">
                                        <span class="lnr lnr-move"></span>
                                        <p class="hover-text">view more</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <section class="exclusive-deal-area">
        <exclusive></exclusive>
    </section>
    <section class="brand-area section_gap">
        <brand></brand>
    </section>
    <section class="brand-area section_gap">
        <feature></feature >
    </section>
</div>
</template>

<script>
import banner from './local_component/Banner'
import brand from './local_component/Brand'
import category from './local_component/Category'
import exclusive from './local_component/Exclusive'
import feature from './local_component/Feature'

export default {
  components: {
    banner,
    brand,
    category,
    exclusive,
    feature

  },
    data() {
        return {
            products: []
        }
    },
    beforeMount() {
        axios.get('/api').then(response => this.products = response.data)
    }
}
</script>

<template>
<div>
    <section class="banner-area organic-breadcrumb">
        <div class="container">
            <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                <div class="col-first">
                    <h1>Checkout</h1>
                    <nav class="d-flex align-items-center">
                        <router-link to="/" class="nav-link">Home<span class="lnr lnr-arrow-right"></span></router-link>
                        <router-link to="/checkout" class="nav-link">Orders</router-link>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    <section class="checkout_area section_gap">
        <div class="container">
            <div class="billing_details">
                <div class="row">
                    <div class="col-lg-8">
                        <h3>Billing Details</h3>
                        <form class="row contact_form" novalidate="novalidate">
                            <div class="col-md-6 form-group p_star">
                                <input type="text" class="form-control" id="first" name="name" v-model="checkout.firstname">
                                <span class="placeholder" data-placeholder="First name"></span>
                            </div>
                            <div class="col-md-6 form-group p_star">
                                <input type="text" class="form-control" id="last" name="name" v-model="checkout.lasttname">
                                <span class="placeholder" data-placeholder="Last name"></span>
                            </div>
                            <div class="col-md-6 form-group p_star">
                                <input type="text" class="form-control" id="number" name="number" v-model="checkout.phone">
                                <span class="placeholder" data-placeholder="Phone number"></span>
                            </div>
                            <div class="col-md-12 form-group">
                                <input type="text" class="form-control" id="company" name="company" placeholder="Company name" v-model="checkout.company">
                            </div>
                            <div class="col-md-6 form-group p_star">
                                <input type="text" class="form-control" id="email" name="compemailany" v-model="checkout.email">
                                <span class="placeholder" data-placeholder="Email Address"></span>
                            </div>
                            <div class="col-md-12 form-group p_star">
                                <select class="country_select" v-model="checkout.country">
                                    <option value="1">Country</option>
                                    <option value="2">Country</option>
                                    <option value="4">Country</option>
                                </select>
                            </div>
                            <div class="col-md-12 form-group p_star">
                                <input type="text" class="form-control" id="add1" name="add1" v-model="checkout.adressone">
                                <span class="placeholder" data-placeholder="Address line 01"></span>
                            </div>
                            <div class="col-md-12 form-group p_star">
                                <input type="text" class="form-control" id="add2" name="add2" v-model="checkout.adresstwo">
                                <span class="placeholder" data-placeholder="Address line 02"></span>
                            </div>
                            <div class="col-md-12 form-group p_star">
                                <input type="text" class="form-control" id="city" name="city" v-model="checkout.city">
                                <span class="placeholder" data-placeholder="Town/City"></span>
                            </div>
                            <div class="col-md-12 form-group p_star">
                                <select class="country_select" v-model="checkout.country">
                                    <option value="1">District</option>
                                    <option value="2">District</option>
                                    <option value="4">District</option>
                                </select>
                            </div>
                            <div class="col-md-12 form-group">
                                <input type="text" class="form-control" id="zip" name="zip" placeholder="Postcode/ZIP" v-model="checkout.postcode">
                            </div>

                        </form>
                    </div>
                    <div class="col-lg-4">
                        <div class="order_box">
                            <h2>Your Order</h2>
                            <ul class="list">
                                <li><a href="#">Product <span>Total</span></a></li>
                                <li v-for="(od, index) in order"><a>{{od.name}} <span class="middle">x {{od.qty}} </span> <span class="last">${{od.price * od.qty}} </span></a></li>
                            </ul>
                            <ul class="list list_2">
                                <li> ${{total}}</li>
                            </ul>
                            <div class="payment_item">
                                <div class="radion_btn">
                                    <input type="radio" id="f-option5" name="selector">
                                    <label for="f-option5">Check payments</label>
                                    <div class="check"></div>
                                </div>
                                <p>Please send a check to Store Name, Store Street, Store Town, Store State / County,
                                    Store Postcode.</p>
                            </div>
                            <div class="payment_item active">
                                <div class="radion_btn">
                                    <input type="radio" id="f-option6" name="selector">
                                    <label for="f-option6">Paypal </label>
                                    <img src="img/product/card.jpg" alt="">
                                    <div class="check"></div>
                                </div>
                                <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal
                                    account.</p>
                            </div>
                            <div class="creat_account">
                                <input type="checkbox" id="f-option4" name="selector">
                                <label for="f-option4">I’ve read and accept the </label>
                                <a href="#">terms & conditions*</a>
                            </div>
                            <a class="primary-btn" href="#" @click="checkoutProduct(checkout)">Proceed to Paypal</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            order: [],
            checkout: {
                firstname: '',
                lastname: '',
                company: '',
                phone: '',
                email: '',
                country: '',
                adressone: '',
                adresstwo: '',
                city: '',
                district: '',
                postcode: '',
                total: ''
            }
        }
    },
    methods: {
        fetchOrder() {
            let url = `/api/order`;
            axios.get(url).then(response => {
                this.order = response.data.order;
            }).catch(error => {
                console.log(error)
            });
        },
        checkoutProduct(checkout) {
            axios.post('/api/checkout/add', {
                firstname: checkout.firstname,
                lastname: checkout.lastname,
                company: checkout.company,
                phone: checkout.phone,
                email: checkout.email,
                country: checkout.country,
                adressone: checkout.adressone,
                adresstwo: checkout.adresstwo,
                city: checkout.city,
                district: checkout.district,
                postcode: checkout.postcode,
                total: this.total(),
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        }
    },
    computed: {
        total() {
            return this.order.reduce((t, od) => t + od.price * od.qty, 0)
        }
    },
    mounted() {
        this.fetchOrder();
    }
}
</script>

<?php

return [
    'name'        => 'Ecommerce',
    'description' => 'Config email templates for Ecommerce',
    'templates'   => [
        'customer_new_order'      => [
            'title'       => 'plugins/ecommerce::email.customer_new_order_title',
            'description' => 'plugins/ecommerce::email.customer_new_order_description',
            'subject'     => 'New order {{ order_id }}',
            'can_off'     => true,
            'enabled'     => false,
        ],
        'customer_cancel_order'   => [
            'title'       => 'plugins/ecommerce::email.order_cancellation_title',
            'description' => 'plugins/ecommerce::email.order_cancellation_description',
            'subject'     => 'Order cancelled {{ order_id }}',
            'can_off'     => true,
        ],
        'customer_delivery_order' => [
            'title'       => 'plugins/ecommerce::email.delivery_confirmation_title',
            'description' => 'plugins/ecommerce::email.delivery_confirmation_description',
            'subject'     => 'Order delivering {{ order_id }}',
            'can_off'     => true,
        ],
        'admin_new_order'         => [
            'title'       => 'plugins/ecommerce::email.admin_new_order_title',
            'description' => 'plugins/ecommerce::email.admin_new_order_description',
            'subject'     => 'New order {{ order_id }}',
            'can_off'     => true,
            'enabled'     => false,
        ],
        'order_confirm'           => [
            'title'       => 'plugins/ecommerce::email.order_confirmation_title',
            'description' => 'plugins/ecommerce::email.order_confirmation_description',
            'subject'     => 'Order confirmed {{ order_id }}',
            'can_off'     => true,
        ],
        'order_confirm_payment'   => [
            'title'       => 'plugins/ecommerce::email.payment_confirmation_title',
            'description' => 'plugins/ecommerce::email.payment_confirmation_description',
            'subject'     => 'Payment for order {{ order_id }} was confirmed',
            'can_off'     => true,
        ],
        'order_recover'           => [
            'title'       => 'plugins/ecommerce::email.order_recover_title',
            'description' => 'plugins/ecommerce::email.order_recover_description',
            'subject'     => 'Incomplete order',
            'can_off'     => true,
        ],
    ],
    'variables'   => [
        'store_address'    => 'plugins/ecommerce::ecommerce.store_address',
        'store_phone'      => 'plugins/ecommerce::ecommerce.store_phone',
        'order_id'         => 'plugins/ecommerce::ecommerce.order_id',
        'order_token'      => 'plugins/ecommerce::ecommerce.order_token',
        'customer_name'    => 'plugins/ecommerce::ecommerce.customer_name',
        'customer_email'   => 'plugins/ecommerce::ecommerce.customer_email',
        'customer_phone'   => 'plugins/ecommerce::ecommerce.customer_phone',
        'customer_address' => 'plugins/ecommerce::ecommerce.customer_address',
        'product_list'     => 'plugins/ecommerce::ecommerce.product_list',
        'payment_detail'   => 'plugins/ecommerce::ecommerce.payment_detail',
        'shipping_method'  => 'plugins/ecommerce::ecommerce.shipping_method',
        'payment_method'   => 'plugins/ecommerce::ecommerce.payment_method',
    ],
];
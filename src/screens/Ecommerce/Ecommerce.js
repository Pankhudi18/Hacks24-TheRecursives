import { Animated, Dimensions, FlatList, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const Ecommerce = () => {

    const flatListRef = useRef(null);

    const data = [
        {
            "id": 1,
            "name": "Kitchen",
            "description": "A high-performance smartphone with advanced features.",
            "heading": "Top-notch Technology",
            "image": "https://www.ikea.com/ext/ingkadam/m/28533fe6ac98ac56/original/PH178372-crop001.jpg?f=s",
            "reviews": [
                { "user": "Customer123", "rating": 4.5, "comment": "Great performance!" },
                { "user": "TechEnthusiast", "rating": 5, "comment": "Impressive features." },
                { "user": "MobileUser123", "rating": 4, "comment": "Good value for money." }
            ],
            "price": "29,999"
        },
        {
            "id": 2,
            "name": "Bed",
            "description": "Powerful laptop for professional use.",
            "heading": "Work with Efficiency",
            "image": "https://www.ikea.com/ext/ingkadam/m/5f5d06f99e511131/original/UGC100004108.jpg?f=s",
            "reviews": [
                { "user": "BusinessUser1", "rating": 4.8, "comment": "Excellent for business tasks." },
                { "user": "TechGeek", "rating": 4.5, "comment": "Sleek design and fast performance." },
                { "user": "OfficeWorker22", "rating": 4, "comment": "Gets the job done." }
            ],
            "price": "50,000"
        },
        {
            "id": 3,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/29b4850796d9a83/original/PH163786-crop001.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 4,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/6bb0cff250a504cc/original/UGC100002897.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 5,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/b73c8ba57d26c5/original/UGC100002085.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 1,
            "name": "Kitchen",
            "description": "A high-performance smartphone with advanced features.",
            "heading": "Top-notch Technology",
            "image": "https://www.ikea.com/ext/ingkadam/m/28533fe6ac98ac56/original/PH178372-crop001.jpg?f=s",
            "reviews": [
                { "user": "Customer123", "rating": 4.5, "comment": "Great performance!" },
                { "user": "TechEnthusiast", "rating": 5, "comment": "Impressive features." },
                { "user": "MobileUser123", "rating": 4, "comment": "Good value for money." }
            ],
            "price": "29,999"
        },
        {
            "id": 2,
            "name": "Bed",
            "description": "Powerful laptop for professional use.",
            "heading": "Work with Efficiency",
            "image": "https://www.ikea.com/ext/ingkadam/m/5f5d06f99e511131/original/UGC100004108.jpg?f=s",
            "reviews": [
                { "user": "BusinessUser1", "rating": 4.8, "comment": "Excellent for business tasks." },
                { "user": "TechGeek", "rating": 4.5, "comment": "Sleek design and fast performance." },
                { "user": "OfficeWorker22", "rating": 4, "comment": "Gets the job done." }
            ],
            "price": "50,000"
        },
        {
            "id": 3,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/29b4850796d9a83/original/PH163786-crop001.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 4,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/6bb0cff250a504cc/original/UGC100002897.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 5,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/b73c8ba57d26c5/original/UGC100002085.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 1,
            "name": "Kitchen",
            "description": "A high-performance smartphone with advanced features.",
            "heading": "Top-notch Technology",
            "image": "https://www.ikea.com/ext/ingkadam/m/28533fe6ac98ac56/original/PH178372-crop001.jpg?f=s",
            "reviews": [
                { "user": "Customer123", "rating": 4.5, "comment": "Great performance!" },
                { "user": "TechEnthusiast", "rating": 5, "comment": "Impressive features." },
                { "user": "MobileUser123", "rating": 4, "comment": "Good value for money." }
            ],
            "price": "29,999"
        },
        {
            "id": 2,
            "name": "Bed",
            "description": "Powerful laptop for professional use.",
            "heading": "Work with Efficiency",
            "image": "https://www.ikea.com/ext/ingkadam/m/5f5d06f99e511131/original/UGC100004108.jpg?f=s",
            "reviews": [
                { "user": "BusinessUser1", "rating": 4.8, "comment": "Excellent for business tasks." },
                { "user": "TechGeek", "rating": 4.5, "comment": "Sleek design and fast performance." },
                { "user": "OfficeWorker22", "rating": 4, "comment": "Gets the job done." }
            ],
            "price": "50,000"
        },
        {
            "id": 3,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/29b4850796d9a83/original/PH163786-crop001.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 4,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/6bb0cff250a504cc/original/UGC100002897.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 5,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/b73c8ba57d26c5/original/UGC100002085.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 1,
            "name": "Kitchen",
            "description": "A high-performance smartphone with advanced features.",
            "heading": "Top-notch Technology",
            "image": "https://www.ikea.com/ext/ingkadam/m/28533fe6ac98ac56/original/PH178372-crop001.jpg?f=s",
            "reviews": [
                { "user": "Customer123", "rating": 4.5, "comment": "Great performance!" },
                { "user": "TechEnthusiast", "rating": 5, "comment": "Impressive features." },
                { "user": "MobileUser123", "rating": 4, "comment": "Good value for money." }
            ],
            "price": "29,999"
        },
        {
            "id": 2,
            "name": "Bed",
            "description": "Powerful laptop for professional use.",
            "heading": "Work with Efficiency",
            "image": "https://www.ikea.com/ext/ingkadam/m/5f5d06f99e511131/original/UGC100004108.jpg?f=s",
            "reviews": [
                { "user": "BusinessUser1", "rating": 4.8, "comment": "Excellent for business tasks." },
                { "user": "TechGeek", "rating": 4.5, "comment": "Sleek design and fast performance." },
                { "user": "OfficeWorker22", "rating": 4, "comment": "Gets the job done." }
            ],
            "price": "50,000"
        },
        {
            "id": 3,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/29b4850796d9a83/original/PH163786-crop001.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 4,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/6bb0cff250a504cc/original/UGC100002897.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 5,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/b73c8ba57d26c5/original/UGC100002085.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 1,
            "name": "Kitchen",
            "description": "A high-performance smartphone with advanced features.",
            "heading": "Top-notch Technology",
            "image": "https://www.ikea.com/ext/ingkadam/m/28533fe6ac98ac56/original/PH178372-crop001.jpg?f=s",
            "reviews": [
                { "user": "Customer123", "rating": 4.5, "comment": "Great performance!" },
                { "user": "TechEnthusiast", "rating": 5, "comment": "Impressive features." },
                { "user": "MobileUser123", "rating": 4, "comment": "Good value for money." }
            ],
            "price": "29,999"
        },
        {
            "id": 2,
            "name": "Bed",
            "description": "Powerful laptop for professional use.",
            "heading": "Work with Efficiency",
            "image": "https://www.ikea.com/ext/ingkadam/m/5f5d06f99e511131/original/UGC100004108.jpg?f=s",
            "reviews": [
                { "user": "BusinessUser1", "rating": 4.8, "comment": "Excellent for business tasks." },
                { "user": "TechGeek", "rating": 4.5, "comment": "Sleek design and fast performance." },
                { "user": "OfficeWorker22", "rating": 4, "comment": "Gets the job done." }
            ],
            "price": "50,000"
        },
        {
            "id": 3,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/29b4850796d9a83/original/PH163786-crop001.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 4,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/6bb0cff250a504cc/original/UGC100002897.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 5,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/b73c8ba57d26c5/original/UGC100002085.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 1,
            "name": "Kitchen",
            "description": "A high-performance smartphone with advanced features.",
            "heading": "Top-notch Technology",
            "image": "https://www.ikea.com/ext/ingkadam/m/28533fe6ac98ac56/original/PH178372-crop001.jpg?f=s",
            "reviews": [
                { "user": "Customer123", "rating": 4.5, "comment": "Great performance!" },
                { "user": "TechEnthusiast", "rating": 5, "comment": "Impressive features." },
                { "user": "MobileUser123", "rating": 4, "comment": "Good value for money." }
            ],
            "price": "29,999"
        },
        {
            "id": 2,
            "name": "Bed",
            "description": "Powerful laptop for professional use.",
            "heading": "Work with Efficiency",
            "image": "https://www.ikea.com/ext/ingkadam/m/5f5d06f99e511131/original/UGC100004108.jpg?f=s",
            "reviews": [
                { "user": "BusinessUser1", "rating": 4.8, "comment": "Excellent for business tasks." },
                { "user": "TechGeek", "rating": 4.5, "comment": "Sleek design and fast performance." },
                { "user": "OfficeWorker22", "rating": 4, "comment": "Gets the job done." }
            ],
            "price": "50,000"
        },
        {
            "id": 3,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/29b4850796d9a83/original/PH163786-crop001.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 4,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/6bb0cff250a504cc/original/UGC100002897.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 5,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/b73c8ba57d26c5/original/UGC100002085.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        }
    ]
    const ecomData = [
        {
            "id": 1,
            "name": "SOFTENAS",
            "description": "Armchair, Hakebo yellow",
            "link": "https://www.ikea.com/in/en/p/sotenaes-armchair-hakebo-yellow-30570819/",
            "image": "https://www.ikea.com/in/en/images/products/sotenaes-armchair-hakebo-yellow__1272609_ph195671_s5.jpg?f=s",
            "reviews": [
                { "user": "Customer123", "rating": 4.5, "comment": "Great performance!" },
                { "user": "TechEnthusiast", "rating": 5, "comment": "Impressive features." },
                { "user": "MobileUser123", "rating": 4, "comment": "Good value for money." }
            ],
            "price": "21,990"
        },
        {
            "id": 2,
            "name": "HOLMSJO",
            "description": "Stool, beech/Jonsbyn black",
            "link": "https://www.ikea.com/in/en/p/holmsjoe-stool-beech-jonsbyn-black-30560995/",
            "image": "https://www.ikea.com/in/en/images/products/holmsjoe-stool-beech-jonsbyn-black__1272523_ph194871_s5.jpg?f=s",
            "reviews": [
                { "user": "BusinessUser1", "rating": 4.8, "comment": "Excellent for business tasks." },
                { "user": "TechGeek", "rating": 4.5, "comment": "Sleek design and fast performance." },
                { "user": "OfficeWorker22", "rating": 4, "comment": "Gets the job done." }
            ],
            "price": "4,490"
        },
        {
            "id": 3,
            "name": "Faroe",
            "description": "Faroe Engineered Wood Queen Size Drawer Storage Upholstered Bed In Grey Finish",
            "link": "https://www.urbanladder.com/products/faroe-upholstered-storage-bed?sku=FNBDST51GY35005&src=room?src=love_blooms_at_home_stars_on_sale_1-furniture-decor",
            "image": "https://www.ulcdn.net/media/Collection/listings/Vds_Sos_1.png?1706702333",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "35,009"
        },
        {
            "id": 4,
            "name": "Botwin",
            "description": "Botwin Rectangular Solid Wood Coffee Table In Teak Finish",
            "image": "https://www.ulcdn.net/media/Collection/listings/Vds_Sos_5.png?1706702340",
            "link": "https://www.urbanladder.com/products/botwin-coffee-table?sku=FNTBCF11TK10131&src=subcat?src=love_blooms_at_home_stars_on_sale_4-furniture-decor",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 5,
            "name": "Iris",
            "description": "Double Bed Sheet Set.",
            "image": "https://cdn.ddecor.com/media/catalog/product/2/0/209247_1_big.jpg",
            "link": "https://www.ddecor.com/bedding-iris-double-bed-sheet-set-209247.html",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "3,299"
        },
        {
            "id": 1,
            "name": "Kitchen",
            "description": "A high-performance smartphone with advanced features.",
            "heading": "Top-notch Technology",
            "image": "https://www.ikea.com/ext/ingkadam/m/28533fe6ac98ac56/original/PH178372-crop001.jpg?f=s",
            "reviews": [
                { "user": "Customer123", "rating": 4.5, "comment": "Great performance!" },
                { "user": "TechEnthusiast", "rating": 5, "comment": "Impressive features." },
                { "user": "MobileUser123", "rating": 4, "comment": "Good value for money." }
            ],
            "price": "29,999"
        },
        {
            "id": 2,
            "name": "Bed",
            "description": "Powerful laptop for professional use.",
            "heading": "Work with Efficiency",
            "image": "https://www.ikea.com/ext/ingkadam/m/5f5d06f99e511131/original/UGC100004108.jpg?f=s",
            "reviews": [
                { "user": "BusinessUser1", "rating": 4.8, "comment": "Excellent for business tasks." },
                { "user": "TechGeek", "rating": 4.5, "comment": "Sleek design and fast performance." },
                { "user": "OfficeWorker22", "rating": 4, "comment": "Gets the job done." }
            ],
            "price": "50,000"
        },
        {
            "id": 3,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/29b4850796d9a83/original/PH163786-crop001.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 4,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/6bb0cff250a504cc/original/UGC100002897.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
        {
            "id": 5,
            "name": "STOCKHOLM",
            "description": "High-quality.",
            "image": "https://www.ikea.com/ext/ingkadam/m/b73c8ba57d26c5/original/UGC100002085.jpg?f=s",
            "reviews": [
                { "user": "MusicLover", "rating": 5, "comment": "Crystal clear sound quality." },
                { "user": "FitnessFanatic", "rating": 4.5, "comment": "Perfect for workouts." },
                { "user": "TechEnthusiast2", "rating": 4, "comment": "Good battery life." }
            ],
            "price": "15,000"
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const totalItems = data.length;
    const scrollInterval = 2000; // Auto-scroll every 3 seconds (adjust as needed)

    const calculateNextIndex = (currentIndex) => (currentIndex + 1) % totalItems;

    useEffect(() => {
        const interval = setInterval(() => {
            if (flatListRef.current) {
                const nextIndex = calculateNextIndex(currentIndex);
                flatListRef.current.scrollToIndex({
                    animated: true,
                    index: nextIndex,
                });
                setCurrentIndex(nextIndex);
            }
        }, scrollInterval);

        return () => clearInterval(interval);
    }, [currentIndex, totalItems]);

    useEffect(() => {
        Animated.timing(scrollX, {
            toValue: currentIndex * width,
            duration: scrollInterval,
            useNativeDriver: false,
        }).start();
    }, [currentIndex]);

    const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
        useNativeDriver: false,
    });

    const renderCarousel = ({ item }) => {
        return (
            <View style={{ marginTop: 20 }}>
                <Image source={{ uri: item?.image }} style={{ width: '100%', height: 300, resizeMode: 'cover' }} />
            </View>
        );
    }

    const onFlatListViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const renderList = ({ item }) => {
        return (
            <View style={{ height: height - 200, paddingLeft: 5 }}>
                <Image source={{ uri: item?.image }} style={{ width: '100%', height: 200, resizeMode: 'cover' }} />
                <Text style={{ fontSize: 15, marginHorizontal: 10 }}>{item?.name}</Text>
            </View>
        );
    }

    const renderData = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => Linking.openURL(item?.link)} style={{ margin: 10 }}>
                <Image source={{ uri: item?.image }} style={{ width: 190, height: 200, resizeMode: 'contain' }} />
                <Text style={{ fontSize: 15, marginVertical: 10, textAlign: 'center' }}>{item?.name}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ height: '40%' }}>
                <Carousel
                    data={data}
                    renderItem={renderCarousel}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width}
                />
            </View>
            <FlatList onViewableItemsChanged={onFlatListViewableItemsChanged} viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }} scrollEventThrottle={16} onScroll={handleScroll} showsHorizontalScrollIndicator={false} ref={flatListRef} horizontal data={data} renderItem={renderList} />
            <FlatList numColumns={2} data={ecomData} renderItem={renderData} />
        </View>
    )
}

export default Ecommerce

const styles = StyleSheet.create({})
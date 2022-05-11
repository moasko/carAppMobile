import React from 'react'
import {Dimensions, ToastAndroid, Alert, Platform } from 'react-native'

export default class Toast {

  //show toast
  static _show_bottom_toast = async (message) => {
    //nothing else
    //ToastAndroid.SHORT for short duration
    //ToastAndroid.LONG for long duration
    if(Platform.OS == 'android'){
    //   ToastAndroid.show(message, ToastAndroid.SHORT)
    }
    if(Platform.OS =='ios'){
      
    }
    
  }

  //show toast
  static _show_center_toast = async (message) => {
    if(Platform.OS == 'android'){
    //   ToastAndroid.showWithGravity(
    //     message,
    //     ToastAndroid.SHORT,
    //     ToastAndroid.CENTER
    //   )
    }
    if(Platform.OS =='ios'){
    }
  }


  _show_toast_with_gravity = async ()=>{
    if(Platform.OS == 'android'){
    //   ToastAndroid.showWithGravity(
    //     'gravity toast',
    //     ToastAndroid.SHORT,
    //     ToastAndroid.BOTTOM
    //   )
    }
    if(Platform.OS =='ios'){
    }
  }

  _show_toast_with_gravity_and_offset = async ()=>{
    if(Platform.OS == 'android'){
    //   ToastAndroid.showWithGravityAndOffset(
    //     'gravity toast, offset',
    //     ToastAndroid.LONG,
    //     ToastAndroid.TOP,
    //     Dimensions.get('window').height,
    //     Dimensions.get('window').height/2
    //   )
    }
    if(Platform.OS =='ios'){
    }
  }
}

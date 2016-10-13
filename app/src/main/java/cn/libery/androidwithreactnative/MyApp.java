package cn.libery.androidwithreactnative;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

/**
 * Created by Libery on 2016/10/13.
 * Email:libery.szq@qq.com
 */

public class MyApp extends Application implements ReactApplication {

    private static MyApp mContext;

    @Override
    public void onCreate() {
        super.onCreate();
        mContext = this;
    }

    public static MyApp getInstance() {
        return mContext;
    }

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        protected boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(new IntentReactPackage(), new MainReactPackage());
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

}

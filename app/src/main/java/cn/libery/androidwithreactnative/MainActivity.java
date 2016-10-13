package cn.libery.androidwithreactnative;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

import java.util.concurrent.ArrayBlockingQueue;

public class MainActivity extends AppCompatActivity {

    //构建一个阻塞的单一数据的队列
    public static ArrayBlockingQueue<String> mQueue = new ArrayBlockingQueue<>(1);

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        findViewById(R.id.start_react).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(final View v) {
                startActivity(new Intent(getApplicationContext(), ReactNativeActivity.class));
            }
        });
        findViewById(R.id.start_react).setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(final View v) {
                startActivity(new Intent(getApplicationContext(), ReactViewActivity.class));
                return true;
            }
        });
    }

    /**
     * 打开 带返回的Activity
     *
     * @param requestCode
     * @param resultCode
     * @param data
     */
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == RESULT_OK && requestCode == 200) {
            String result = data.getStringExtra("result");
            if (result != null && !result.equals("")) {
                mQueue.add(result);
            } else {
                mQueue.add("无数据啦");
            }
        } else {
            mQueue.add("没有回调...");
        }
    }
}

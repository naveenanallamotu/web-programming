package com.sample.labassignment1;

import android.app.Activity;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class WebViewActivity extends AppCompatActivity {

    private WebView webView;
    String str = "";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web_view);

        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            str = extras.getString("key");
            //The key argument here must match that used in the other activity
        }
        webView = new WebView(this);
        webView.getSettings().setJavaScriptEnabled(true);
        final Activity activity = this;
        webView.setWebViewClient(new WebViewClient()
        {
            public void onReceivedError(WebView view, int errorCode, String description, String failingUrl)
            {
                Toast.makeText(activity, description, Toast.LENGTH_SHORT).show();
            }
        });
        webView.loadUrl(str);
        setContentView(webView);
    }
}

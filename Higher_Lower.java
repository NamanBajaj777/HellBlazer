package com.example.higher_lower;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    public void hg(View j)
    {
        EditText find=(EditText) findViewById(R.id.find);
        Log.i("Info","Message Received");
        Log.i("Values",find.getText().toString());
        int X=Integer.parseInt(find.getText().toString());
        if(X>12)
        {
            Toast.makeText(this, "Lower", Toast.LENGTH_SHORT).show();
        }
        if(X<12)
        {
            Toast.makeText(this, "Higher", Toast.LENGTH_SHORT).show();
        }
        else
        {
            Toast.makeText(this, "Correct", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}

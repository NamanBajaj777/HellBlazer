package com.example.currencyconvertor;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    public void changeCurrency(View view)
    {
        EditText editCurrency=(EditText) findViewById(R.id.editCurrency);
        Log.i("Info","Button Pressed");
        String X=editCurrency.getText().toString();
        double Y=Double.parseDouble(X);
         Y=Y*70.39;
        String Z=Double.toString(Y);
        Log.i("Values", X);
        Toast.makeText(this, "Rs."+""+ Z, Toast.LENGTH_SHORT).show();

    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}

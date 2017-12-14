package com.tcs.speechtotextpoc.translation_engine.translators;

import android.app.Activity;

public interface IConvertor {

    public IConvertor initialize(String message, Activity appContext);
}

log = ChromeSamples.log;

if (!("NDEFReader" in window))
  ChromeSamples.setStatus(
    "Web NFC is not available.\n" +
      'Please make sure the "Experimental Web Platform features" flag is enabled on Android.'
  );

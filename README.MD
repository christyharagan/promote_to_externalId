# Overview

This Segment Destination Function enables taking a standard user-trait and "promotes" it to an external-id. This function can be connected to any source (including, for example, as a destination to a SQL trait).

# Usage

To install, use [Sloth Package Manager](https://www.npmjs.com/package/segment-sloth) simply run (if new to spm, be sure to first run ```spm init```):

```spm install christyharagan/sloth-github-action```

Then in your Segment workspace create a new destination from the function called "promote_to_externalId"
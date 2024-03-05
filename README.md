# Send mail GitHub Action

Send email github action can be used from any workflow where email needs to be sent to any recipient.

## Usage

```yaml
- name: Send mail
  uses: DSubhadipSahoo/send-email@v1
  with:
    # Required smtp host name. For example smtp.gmail.com. Recommended to put this in github secrets and fetch from there like ${{secrets.HOST}}
    host: <SMTP HOST NAME> 
    # Required smtp port number. For example 465. Recommended to put this in github secrets and fetch from there like ${{secrets.PORT}}
    port: <SMTP PORT> 
    # Required smtp server username to authenticate to smtp server access. Recommended to put this in github secrets and fetch from there like ${{secrets.USER}}
    user: <SMTP USER> 
    # Required smtp server password. Recommended to put this in github secrets and fetch from there like ${{secrets.PASS}}
    pass: <SMTP PASS> 
    # Required mail subject
    subject: <EMAIL SUBJECT>
    # Required recipients' addresses. Please note for the time being only 1 recipient can be added under `to` input
    to: <RECIPIENT'S EMAIL ADDRESS>
    # Required sender full name and email address. for example Jon Doe <jon.doe@example.com>
    from: <FULL NAME> <<fullname@example.com>>
    # Required HTML body
    html_body: <HTML EMAIL BODY>
    # Optional carbon copy recipients. Multiple emails can be uses in comma separated way like jon@example.com, jane@example.com
    cc: <CC RECIPIENTS>
```

from subprocess import call

call(['npm','run','build'])
call(['rsync','-avzhe','ssh','dist/','root@haoxp.xyz:/usr/share/nginx/resume'])
#call(['rsync','-avzhe','ssh','dist/static','root@haoxp.xyz:/usr/share/nginx/resume'])
#call(['firebase', 'deploy'])

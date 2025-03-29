#!/bin/sh
# CRON
cp /var/www/docker/php-fpm/crontab /etc/cron.d/crontab
chmod 0644 /etc/cron.d/crontab
crontab /etc/cron.d/crontab
cron

php-fpm &
nginx -g "daemon off;" &
supervisord -c /etc/supervisor/supervisord.conf

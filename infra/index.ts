import * as pulumi from "@pulumi/pulumi";
import * as awsx from "@pulumi/awsx";

import { ordersService } from './src/services/orders'
import { rabbitMQService } from './src/services/rabbitmq'
import { appLoadBalancer } from "./src/load-balancer";


export const ordersId = ordersService.service.id
export const rabbitmqId = rabbitMQService.service.id
export const rabbitMQAdminUrl = pulumi.interpolate`http://${appLoadBalancer.listeners[0].endpoint.hostname}:15672`


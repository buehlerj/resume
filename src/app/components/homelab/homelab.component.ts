import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homelab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homelab.component.html',
  styleUrl: './homelab.component.scss',
})
export class HomelabComponent {
  public homelabProjects: any[];

  constructor() {
    this.homelabProjects = [
      {
        label: 'Server Room',
        description: `When I first moved into my house, I set up a corner in my garage to be my
          server room. I framed, ran 2x 20A power, insulated, dry walled, and painted the area
          installing a portable AC unit to exhaust out the side of the building. I installed a 27U
          server rack which includes a UPS, Dell Poweredge R620, Dell Poweredge R310, Audio Amp,
          NVR Security, 24 port PoE+ Managed Network Switch, and ethernet patch panel with CAT 6e
          cable that I ran throughout the house.`,
      },
      {
        label: 'Hypervisor',
        logo: 'tech/proxmox.png',
        description: `I chose to use PROXMOX for my hypervisor because of the flexibility and ease
         of access. Most of my Virtual Machines and containers run on Ubuntu 24.04 Server. The
         hardware for this server is a Dell Poweredge R620 with dual Intel Xeon X5650 @2.67GHz (24
         total cores), 188.88 GiB of RAM, 2x 15k SAS 600GB drives in RAID 1. This server represents
         the majority of compute in my house. `,
      },
      {
        label: 'Smart Home Hub',
        logo: 'tech/home assistant.png',
        description: `The main project that I work on in my house. This instance of Home
          Assistant has over 150 devices (and counting), 30+ integrations, and 60+ automations.
          It controls my lights, blinds, security, entry ways, home audio, home theater, and so
          much more. I am controlling devices over Wi-Fi, Zigbee, Z-Wave, and Thread.`,
      },
      {
        label: 'Docker Environment',
        logo: 'tech/portainer.png',
        description: `One of my biggest dreams in owning a home lab was to be able to host my
          websites and personal projects. I have a Ubuntu server virtual machine that is managed
          using portainer that hosts all of my Docker images. This includes my CloudFlare Zero Trust
          Tunnel container, all of my projects under Personal Projects, and this website. Everything
          is Dockerized, deployed to my public Docker Hub, pulled down to my Portainer VM, then
          routed via Cloud Flare to my domain.`,
      },
      {
        label: 'Media Share',
        logo: 'tech/jellyfin.png',
        description: `This project was to host my digitalized collection of Blu-Rays and DVDs. I
          wanted to get into a project that taught me about video encoding and transcoding. Using
          MakeMKV and Handbrake, I learned a lot about video encoding settings to optimize space and
          fidelity. Right now there is no hardware transcoding, but that is a project that I would
          love to jump into in the future.`,
      },
      {
        label: 'Gaming',
        logo: 'tech/minecraft.png',
        description: `I am a big PC gamer and use gaming to meet people. I have met tons of people
          all over the world in the past few years and started to host my own Minecraft server for
          us to spend time together. It is built with Docker Compose and hosted in its own VM. This
          project is also hosted on my domain. I have a creative and survival server to mess around
          in.`,
      },
      {
        label: 'Network Attached Storage',
        logo: 'tech/truenas.png',
        description: `Using a Dell Poweredge R320, I set up a TrueNAS Core instance. Right now my
          ZFX Pool has 1 vdev of 3x 10TB Enterprise NAS drives. I've set up a few SMB Network Shares
          off of this, including one for Jellyfin media server. It has an Intel Xeon X3400 @2.53GHz
          with 48 GiB of ECC RAM. Currently I have a 4x 1Gbps NIC that is set up in a LAG for
          redundancy.`,
      },
      {
        label: 'Home Security',
        logo: 'tech/reolink.png',
        description: `I'm obviously not going to go into too much detail about my security system,
          but I have an NVR that feeds from multiple POE cameras stored on a RAID 1 storage system.
          There's AI image recognition on each camera that feeds notfications to me if I am not home.
          The goal was to set up a high-quality security system that avoided a monthly fee, and was
          configurable to my needs.`,
      },
    ];
  }
}

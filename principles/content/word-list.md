---
description: These words can sometimes present a challenge. Here’s how to use them.
---

# Word List

### aCLI

Acropolis command-line interface

### Acropolis

The Nutanix converged software fabric for virtualization and storage management. It consists of the Acropolis base software, Acropolis Distributed Storage Fabric, AHV, App Mobility Fabric, Prism, and Acropolis APIs.

### Acropolis App Mobility Fabric

Provides virtualization management, volume management, and other distributed management functions for Acropolis.  
Abbreviation: AMF

### add-on \(noun, adjective\), add on \(verb\)

### AHV

Nutanix-specific hypervisor host providing core server virtualization and optimized for Nutanix cluster and guest VM use.  
Don’t use: KVM, Acropolis Hypervisor

### AOS

The Acropolis base software. The bits that power the CVM.  
Don’t use: NOS

### back end \(noun\), back-end \(adjective\)

### block

A set of Nutanix nodes contained in a single enclosure.

### block fault tolerance

When certain conditions are met, redundant copies of any data required to serve I/O are placed on nodes that are not in the same block. In the case where multiple nodes in a block fail, the cluster can continue to run because cluster configuration data exists on other blocks. Guest VMs can continue to run because redundant copies of guest VM data and metadata exist on other blocks.  
Don’t use: block awareness

### checkbox

### clone

A writeable copy of a vDisk.

### Cloud Connect

A feature that enables you to back up and restore copies of virtual machines and files to and from an on-premise cluster and a Nutanix Controller VM located on the Amazon Web Service \(AWS\) or Microsoft Azure cloud. The cloud-based cluster is managed as a remote site from the Prism Web Console or nCLI.

### cluster

A group of nodes contained in one or more Nutanix blocks.

### cold data

Data that did not have many rewrites or overwrites for a long time. For example, snapshots, file servers, archives, or backups.

### compression

An optional container setting that enables one of two types of compression.

### compression, inline

Data is compressed as it is written. This type of compression is recommended for workloads that perform batch processing.

### compression, post-process

Data is compressed after it is written. The delay time between write and compression is configurable. Because every workload has a different I/O profile, Nutanix has no recommended delay value. This type of compression is recommended for most workloads.

### consistency group

A subset of VMs in a protection domain. All VMs within a consistency group for that protection domain will be snapshotted in a crash-consistent manner. For all VMs in a consistency group, a snapshot creates one snapshot for all VMs in the group.

### Controller VM

A Nutanix VM that manages storage and other cluster functions on a node.  
Abbreviation: CVM  
Don’t use: SVM

### coworker

### data resiliency

A logical container for files necessary for VM operations.

### deduplication

The sharing of identical guest VM data on premium tiers \(RAM and Flash\) for improved performance or on capacity tiers \(HDD\) for storage space savings. Enabled by properties of a container or vDisk.

### Distributed Storage Fabric

All storage functionality, including snapshots and clones, data protection, disaster recovery, data path redundancy, replication factors, deduplication, compression, erasure coding, and so on.  
Abbreviation: DSF

### double-click

### drop-down \(noun, adjective\), drop down \(verb\)

### email \(never hyphenate, never capitalize unless it begins a sentence\)

### Enterprise Cloud Platform

The Nutanix solution that natively converges compute, virtualization and storage into a resilient, software-defined solution with rich machine intelligence.  
Don’t use: Xtreme Computing Platform, XCP

### erasure coding

Optional algorithm included in the Acropolis base software to help reduce the storage used for fault tolerance. It helps to increase the effective or usable capacity on a cluster, depending on cluster size and data coldness.

### failback

Planned failover initiated from recovery site.

### failover

Moving VMs from a primary site to a recovery site. A disaster failover is a failover performed when the primary site is down. A planned failover is a failover performed when both sites are up.

### front end \(noun\), front-end \(adjective\)

### guest VM

A VM running on a Nutanix cluster that executes a workload, such as VDI or Exchange, as opposed to a VM that is involved in cluster operations, such as a Controller VM.  
Don’t use: user VM, UVM

### homepage

### host

An instance of the hypervisor that runs on a Nutanix node.

### image service

A workflow in the Prism web console that enables a user to upload ISO or disk images \(in ESXi or Hyper-V format\) to a Nutanix AHV cluster by specifying a remote repository URL or by uploading a file from a local machine.

### internet \(never capitalize unless it begins a sentence\)

### local replication

Multiple copies of data within a container. These copies exist for fault tolerance: if a physical disk fails, the cluster can recover data from another copy. The cluster manages the replicated data, and the copies are not visible to the user.

### local snapshot

Snapshots stored on the same cluster where they originated.

### login \(noun, adjective\), log in \(verb\)

### nCLI

Nutanix command-line interface.

### node

A physical server contained in a Nutanix block; runs a hypervisor host.

### Nutanix Services

Product support, consulting services, and training and certification.  
Don’t use: Nutanix GSO, Nutanix Global Services Organization

### OK

### online \(never capitalize unless it begins a sentence\)

### oplog

A write cache on a faster, more expensive storage tier.

### opt-in \(noun, adjective\) , opt in \(verb\)

### policy

Set of one or more rules used to enforce processes or relationships in or among clusters or cluster entities.

### pop-up \(noun, adjective\), pop up \(verb\)

### Prism

Web-based management interface for managing Nutanix clusters.

### Prism Central

Centralized management tool that runs as a separate VM configured as a single-node cluster to monitor and manage multiple clusters through a single web console.

### Prism Element

A single cluster being managed by and available through the Prism Central web console.  
Abbreviation: PE

### protection domain

A group of VMs to be backed up locally on a cluster or replicated on the same schedule to one or more clusters. Protection domains may be associated with remote sites. Protection domain names must be unique across sites. A VM can be in at most one protection domain. Live protection domains manage live VMs, and can make, replicate, and expire snapshots. Inactive protection domains receive snapshots from a remote cluster.

### redundancy factor

The number of nodes plus 1 that the cluster can tolerate being down at one time. By default, Nutanix clusters have a redundancy factor of 2, which means that they can tolerate 1 node being down. They are configurable to redundancy factor 3 to enable tolerating 2 nodes being down.

### remote replication, one-to-one

Replicates a production cluster with one idle cluster as a DR target.

### remote replication, reciprocal

Cross replication within running \(non-idle\) production clusters.

### remote site

A pair of clusters that can replicate data to each other. A configured remote site can also be located in the cloud \(based on Amazon AWS or Microsoft Azure, for example\).

### remote snapshot

A snapshot copied asynchronously from one cluster to another.

### replication factor

The number of copies of data kept by a container. The default is 2. Containers on clusters with redundancy factor of 3 can have replication factor of 3.  
Abbreviation: RF

### reserved capacity

A property of a container or vDisk that guarantees that a certain amount of storage space is available.

### schedule

A property of a protection domain that specifies the intervals to take snapshots and how long the snapshots should be retained. A schedule optionally specifies which remote site to replicate to.

### Self-Service Restore

Allows a user to restore a file within a virtual machine from the Nutanix protected snapshot with minimal Nutanix administrator intervention.

### shadow clone

A cache of a vDisk on all the nodes in the cluster. When a vDisk is read by multiple VMs \(such as the base image for a VDI clone pool\), the cluster creates shadow clones of the vDisk.

### signup \(noun, adjective\), sign up \(verb\)

### snapshot

A read-only copy of the state and data of a VM at a point in time. Snapshots for a VM are crash consistent, which means that the VMDK on-disk images are consistent with a single point in time. That is, the snapshot represents the on-disk data as if the VM crashed. The snapshots are not, however, application consistent, meaning that application data is not quiesced at the time of snapshot, unless the protection domain is configured to use application-consistent snapshots.

### storage container

A subset of available storage within a storage pool.

### storage pool

A group of physical disks from one or more tiers.

### storage replication adapter

A Nutanix-provided module that allows VMware Site Replication Manager \(SRM\) to use native remote replication.

### sync

### tier

A type of physical storage in a Nutanix node.

### username

### URL

### vDisk

Data associated with a VM represented as a set of files on a datastore.

### VM high availability

In virtualization management VM high availability, when a node becomes unavailable, VMs that are running on that node are restarted on another node in the same cluster.

### VM mobility

The ability to export your existing VMs from one non-AHV cluster to an AHV cluster. This option requires that you install the Nutanix VM Mobility installer on all the VMs. The Nutanix VM Mobility installer deploys the drivers that are required at the destination AHV cluster. After you prepare the source VMs, they can be exported to the AHV cluster.

### vStore

A separate mount point within a container which has its own NFS namespace. This namespace maps to a protection domain. Each vStore is exported as a device through the Nutanix SRA.

### website

